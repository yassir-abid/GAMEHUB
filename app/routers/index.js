const express = require('express');

const controller = require('../controllers');
const controllerHandler = require('../helpers/controllerHandler');

const { errorHandler, WebsiteError } = require('../helpers/errorHandler');

const router = express.Router();

router
    .route('/')
    .get(controllerHandler(controller.home));

router
    .route('/game/:gameName')
    .get(controllerHandler(controller.game));

router.use(() => {
    throw new WebsiteError('Page introuvable', { statusCode: 404 });
});

router.use((err, _, response, next) => {
    errorHandler(err, response, next);
});

module.exports = router;
