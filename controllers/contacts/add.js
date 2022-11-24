const { addContact } = require('../../models/contacts');

const { v4 } = require('uuid');

const add = async (req, res) => {
  const { body } = req;
  const id = v4();
  body.id = id;
  const newContact = await addContact(body);
  res.status(201).json(newContact);
};

module.exports = add;
