const { updateContact } = require('../../models/contacts');

const change = async (req, res) => {
  const { body } = req;
  const { contactId } = req.params;

  const contact = await updateContact(contactId, body);
  if (!contact) {
    const error = new Error('Not found');
    error.status = 404;
    throw error;
  }
  res.json(contact);
};

module.exports = change;
