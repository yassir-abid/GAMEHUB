const debug = require('debug')('controller');
const games = require('../../data/games.json');

const controller = {
    home(_, res) {
        debug('home');
        return res.render('index');
    },

    game(req, res) {
        const { gameName } = req.params;
        debug(gameName);
        // eslint-disable-next-line max-len
        const searchedGame = games.find((game) => game.name.toLowerCase() === gameName.toLowerCase());

        if (searchedGame === undefined) {
            res.status(404).send('Game not found');
        } else {
            res.render(`${searchedGame.name}`, { searchedGame });
        }
    },
};

module.exports = controller;
