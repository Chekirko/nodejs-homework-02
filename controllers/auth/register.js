const { User } = require('../../models');
const gravatar = require('gravatar');
const { Conflict } = require('http-errors');

// const bcrypt = require('bcryptjs');

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with email: ${email} already exist`);
  }

  const avatarURL = gravatar.url(email);
  const newUser = new User({ name, email, avatarURL });
  newUser.setPassword(password);
  await newUser.save();

  //   await User.create({ name, email, password: hashPassword });

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
