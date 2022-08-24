const logger = require('./logger');
const WebsiteError = require('./websiteError');

/**
 * Middleware that respond to a next method with an error as argument
 * @param {object} err Error class
 * @param {object} res Express response object
 */
const errorHandler = (err, res) => {
    let statusCode = err.infos?.statusCode;

    if (!statusCode || Number.isNaN(Number(statusCode))) {
        statusCode = 500;
    }

    if (statusCode === 500) {
        logger.error(err);
    }

    let error;

    if (statusCode === 404) {
        error = {
            statusCode,
            message: err.message,
        };
        res.render('error', { error });
    } else {
        error = {
            statusCode: undefined,
            message: 'Une erreur est survenue. Veuillez réessayer plus tard !',
        };
        res.render('error', { error });
    }
};

module.exports = {
    WebsiteError,
    errorHandler,
};
