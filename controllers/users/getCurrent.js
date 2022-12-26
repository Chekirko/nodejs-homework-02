// const { User } = require('../../models');

const getCurrent = async (req, res) => {
  const { email } = req.body;
  res.json({
    ResponseBody: {
      email: email,
      subscription: 'starter',
    },
  });
};

module.exports = getCurrent;
