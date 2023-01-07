const express = require('express');

const { joiRegisterScheme, joiLoginScheme, joiVerifyEmailScheme } = require('../../models/user');
const { auth, validation, ctrlWrapper } = require('../../middlewares');

const { auth: ctrl } = require('../../controllers');

const router = express.Router();

router.post('/signup', validation(joiRegisterScheme), ctrlWrapper(ctrl.register));

router.get('/verify/:verificationToken', ctrlWrapper(ctrl.verifyEmail));

router.post('/verify', validation(joiVerifyEmailScheme), ctrlWrapper(ctrl.resendVerifyEmail));

router.post('/login', validation(joiLoginScheme), ctrlWrapper(ctrl.login));

router.post('/logout', auth, ctrlWrapper(ctrl.logout));

module.exports = router;
