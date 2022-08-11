const debug = require('debug')('controller');

const controller = {
    home(_, res) {
        debug('home');
        return res.send('homepage');
    },
};

module.exports = controller;
