const express = require('express');

const controller = require('../controllers');
const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

router
    .route('/')
    .get(controllerHandler(controller.home));

router
    .route('/game/:gameName')
    .get(controllerHandler(controller.game));

module.exports = router;
