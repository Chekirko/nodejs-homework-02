const { Schema, SchemaTypes, model } = require('mongoose');
const Joi = require('joi');

const addContactScheme = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  phone: Joi.string().required(),
  favorite: Joi.bool(),
});

const updateFavScheme = Joi.object({
  favorite: Joi.bool().required(),
});

const putContactScheme = Joi.object()
  .keys({
    name: Joi.string().alphanum().min(3).max(30),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    phone: Joi.number(),
    favorite: Joi.bool(),
  })
  .or('name', 'email', 'phone', 'favorite');

const schemas = { addContactScheme, updateFavScheme, putContactScheme };

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: SchemaTypes.ObjectId,
    ref: 'user',
    required: true,
  },
});

const Contact = model('contact', contactSchema);

module.exports = {
  Contact,
  schemas,
};
