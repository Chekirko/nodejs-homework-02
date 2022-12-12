const { Contact } = require('../../models');

const add = async (req, res) => {
  const { _id } = req.user;
  const { body } = req;
  const newContact = await Contact.create({ ...body, owner: _id });
  res.status(201).json(newContact);
};

module.exports = add;
