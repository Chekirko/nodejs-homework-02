const { Contact } = require('../../models/contacts');

const add = async (req, res) => {
  const { body } = req;
  const newContact = await Contact.create(body);
  res.status(201).json(newContact);
};

module.exports = add;
