const { User } = require('../../models');
const { Conflict } = require('http-errors');

// const bcrypt = require('bcryptjs');

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with email: ${email} already exist`);
  }

  const newUser = new User({ name, email });
  newUser.setPassword(password);
  await newUser.save();

  //   await User.create({ name, email, password: hashPassword });

  res.status(201).json({
    ResponseBody: {
      user: {
        email: email,
        subscription: 'starter',
      },
    },
  });
};

module.exports = register;
