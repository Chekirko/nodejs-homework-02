const { User } = require('../../models');
const gravatar = require('gravatar');
const { Conflict } = require('http-errors');
const { sendEmail } = require('../../helpers');
const { nanoid } = require('nanoid');

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with email: ${email} already exist`);
  }

  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();
  const newUser = new User({ name, email, avatarURL, verificationToken });
  newUser.setPassword(password);
  await newUser.save();

  const mail = {
    to: email,
    subject: 'Email verification',
    html: `<a target="_blank" href="http://localhost:3000/api/auth/verify/${verificationToken}">Please, click on me</a>`,
  };

  await sendEmail(mail);

  res.status(201).json({
    ResponseBody: {
      user: {
        name,
        email: email,
        subscription: 'starter',
        avatarURL,
      },
    },
  });
};

module.exports = register;
