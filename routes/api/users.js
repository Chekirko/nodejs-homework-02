const express = require('express');

// const { joiRegisterScheme, joiLoginScheme } = require('../../models/user');
const { auth, ctrlWrapper } = require('../../middlewares');

const { users: ctrl } = require('../../controllers');

const router = express.Router();

router.get('/current', auth, ctrlWrapper(ctrl.getCurrent));

module.exports = router;
