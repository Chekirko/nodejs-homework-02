const express = require('express');

const { joiRegisterScheme, joiLoginScheme } = require('../../models/user');
const { validation, ctrlWrapper } = require('../../middlewares');

const { auth: ctrl } = require('../../controllers');

const router = express.Router();

router.post('/signup', validation(joiRegisterScheme), ctrlWrapper(ctrl.register));

router.post('/login', validation(joiLoginScheme), ctrlWrapper(ctrl.login));

module.exports = router;
