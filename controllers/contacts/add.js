const { Contact } = require('../../models');

const add = async (req, res) => {
  const { body } = req;
  const newContact = await Contact.create(body);
  res.status(201).json(newContact);
};

module.exports = add;
