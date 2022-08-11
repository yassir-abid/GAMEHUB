const express = require('express');

const controller = require('../controllers');
const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

router
    .route('/')
    .get(controllerHandler(controller.home));

module.exports = router;
