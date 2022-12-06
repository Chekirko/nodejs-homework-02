const express = require('express');

const { schemas } = require('../../models/contacts');
const { validation, ctrlWrapper } = require('../../middlewares');

const validateMiddlewareAdd = validation(schemas.addContactScheme);
const validateMiddlewarePut = validation(schemas.putContactScheme);
const validateMiddlewareUpdateFav = validation(schemas.updateFavScheme, 'missing field favorite');

const { contacts: ctrl } = require('../../controllers');

const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getAll));

router.get('/:contactId', ctrlWrapper(ctrl.getById));

router.post('/', validateMiddlewareAdd, ctrlWrapper(ctrl.add));

router.delete('/:contactId', ctrlWrapper(ctrl.deleteContact));

router.patch('/:contactId/favorite', validateMiddlewareUpdateFav, ctrlWrapper(ctrl.updateFav));

router.put('/:contactId', validateMiddlewarePut, ctrlWrapper(ctrl.change));

module.exports = router;
