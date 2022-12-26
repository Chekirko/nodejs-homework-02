const { Contact } = require('../../models');

const getAll = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 20 } = req.query;

  const contacts = await Contact.find({ owner: _id }, '', {
    skip: (page - 1) * limit,
    limit: limit,
  }).populate('owner', '_id name email');
  res.status(200).json(contacts);
};

module.exports = getAll;
