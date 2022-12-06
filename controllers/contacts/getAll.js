const { Contact } = require('../../models/contacts');

const getAll = async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
};

module.exports = getAll;
