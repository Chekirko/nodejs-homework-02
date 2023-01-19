const { User } = require('../../models');
const { NotFound, BadRequest } = require('http-errors');
const { sendEmail } = require('../../helpers');

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new NotFound('User not found');
  }
  if (user.verify) {
    throw new BadRequest('Verification has already been passed');
  }

  const mail = {
    to: email,
    subject: 'Email verification',
    html: `<a target="_blank" href="http://localhost:3000/api/auth/verify/${user.verificationToken}">Please, click on me</a>`,
  };

  await sendEmail(mail);

  res.status(200).json({
    ResponseBody: {
      message: 'Verification email sent',
    },
  });
};

module.exports = resendVerifyEmail;
