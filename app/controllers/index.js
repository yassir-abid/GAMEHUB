const debug = require('debug')('controller');

const controller = {
    home(_, res) {
        debug('home');
        return res.render('index');
    },
};

module.exports = controller;
