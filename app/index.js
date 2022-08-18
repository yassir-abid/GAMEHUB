const express = require('express');
const router = require('./routers');
const games = require('../data/games.json');

const app = express();

app.set('views', './app/views');
app.set('view engine', 'ejs');

app.locals.games = games;

app.use(express.static('public'));

app.use(router);

module.exports = app;
