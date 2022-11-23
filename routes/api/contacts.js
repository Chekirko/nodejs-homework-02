const express = require('express');

const { addContactScheme, putContactScheme } = require('../../schemas');
const { validation, ctrlWrapper } = require('../../middlewares');

const validateMiddlewareAdd = validation(addContactScheme);
const validateMiddlewarePut = validation(putContactScheme);

const { contacts: ctrl } = require('../../controllers');

const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getAll));

router.get('/:contactId', ctrlWrapper(ctrl.getById));

router.post('/', validateMiddlewareAdd, ctrlWrapper(ctrl.add));

router.delete('/:contactId', ctrlWrapper(ctrl.deleteContact));

router.put('/:contactId', validateMiddlewarePut, ctrlWrapper(ctrl.change));

module.exports = router;
