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
    },

    reset() {
        document.getElementById('player').innerHTML = '';
    },

    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    createAllDices() {
        for (let nbDice = 0; nbDice < Number(game.nbDices); nbDice += 1) {
            game.createDice();
        }
    },

    createDice() {
        const dice = document.createElement('div');
        const diceValue = game.getRandom(1, 6);
        const imageOffset = (diceValue - 1) * 100;
        dice.className = 'dice';
        dice.textContent = '';
        dice.style.backgroundPosition = `-${imageOffset}px 0`;
        document.getElementById('player').appendChild(dice);
    },
};

document.addEventListener('DOMContentLoaded', game.init);
