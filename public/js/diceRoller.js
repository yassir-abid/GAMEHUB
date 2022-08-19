const game = {

    nbDices: null,

    init() {
        const playBtn = document.getElementById('play');

        playBtn.addEventListener('click', game.start);

        document.addEventListener('keyup', (event) => {
            if (event.code === 'Space') {
                game.start();
            }
        });

        game.boards = document.querySelectorAll('.board');

        game.diceNumberInput = document.getElementById('dice-number-input');
        game.diceNumberInput.addEventListener('input', game.changeNumber);

        const gameForm = document.getElementById('game-form');
        gameForm.addEventListener('submit', game.play);

        game.changeNumber();
    },

    start() {
        document.getElementById('welcome').classList.add('hidden');
        document.getElementById('app').classList.remove('hidden');
    },

    changeNumber() {
        const diceNumberElement = document.getElementById('dice-number');
        game.nbDices = game.diceNumberInput.value;
        diceNumberElement.textContent = game.nbDices;
    },

    play(event) {
        event.preventDefault();
        game.reset();
        game.createAllDices('player');
        setTimeout(game.dealerPlay, 3000);
    },

    reset() {
        for (let boardIndex = 0; boardIndex < game.boards.length; boardIndex += 1) {
            game.boards[boardIndex].innerHTML = '';
        }
    },

    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    createAllDices(player) {
        for (let nbDice = 0; nbDice < Number(game.nbDices); nbDice += 1) {
            game.createDice(player);
        }
    },

    createDice(player) {
        const dice = document.createElement('div');
        const diceValue = game.getRandom(1, 6);
        const imageOffset = (diceValue - 1) * 100;
        dice.className = 'dice';
        dice.textContent = '';
        dice.style.backgroundPosition = `-${imageOffset}px 0`;
        document.getElementById(player).appendChild(dice);
    },

    dealerPlay() {
        game.createAllDices('dealer');
    },
};

document.addEventListener('DOMContentLoaded', game.init);
