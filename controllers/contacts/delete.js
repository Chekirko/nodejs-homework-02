const { Contact } = require('../../models');

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const removedContact = await Contact.findByIdAndRemove(contactId);
  if (!removedContact) {
    const error = new Error('Not found');
    error.status = 404;
    throw error;
  }
  res.json({
    message: 'contact deleted',
    data: removedContact,
  });
};

module.exports = deleteContact;
