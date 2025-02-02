const Joi = require('joi');

const addContactScheme = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  phone: Joi.string().required(),
});

const putContactScheme = Joi.object()
  .keys({
    name: Joi.string().alphanum().min(3).max(30),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    phone: Joi.number(),
  })
  .or('name', 'email', 'phone');

module.exports = { addContactScheme, putContactScheme };
