const { Contact } = require('../../models');

const updateFav = async (req, res) => {
  const { body } = req;
  const { contactId } = req.params;

  const contact = await Contact.findByIdAndUpdate(contactId, body, { new: true });
  if (!contact) {
    const error = new Error('Not found');
    error.status = 404;
    throw error;
  }
  res.json(contact);
};

module.exports = updateFav;
