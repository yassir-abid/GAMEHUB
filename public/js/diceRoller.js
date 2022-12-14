const game = {

    nbDices: null,

    victory: 0,
    defeat: 0,

    ingame: false,

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

        if (!game.ingame) {
            game.ingame = true;
            game.reset();
            game.playerScore = game.createAllDices('player');
            setTimeout(game.dealerPlay, 3000);
            game.createCounter();
        }
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
        let score = 0;

        for (let nbDice = 0; nbDice < Number(game.nbDices); nbDice += 1) {
            const diceScore = game.createDice(player);
            score += diceScore;
        }

        return score;
    },

    createDice(player) {
        const dice = document.createElement('div');
        const diceValue = game.getRandom(1, 6);
        const imageOffset = (diceValue - 1) * 100;
        dice.className = 'dice';
        dice.textContent = '';
        dice.style.backgroundPosition = `-${imageOffset}px 0`;
        document.getElementById(player).appendChild(dice);

        return diceValue;
    },

    dealerPlay() {
        const dealerScore = game.createAllDices('dealer');

        if (dealerScore > game.playerScore) {
            game.defeat += 1;
        } else if (dealerScore < game.playerScore) {
            game.victory += 1;
        }

        game.displayResult('player', game.victory);
        game.displayResult('dealer', game.defeat);

        game.ingame = false;
    },

    displayResult(board, counter) {
        const result = document.createElement('div');

        result.className = 'result';
        result.textContent = counter;

        document.getElementById(board).appendChild(result);
    },

    createCounter() {
        game.counter = 3;

        game.counterElement = document.createElement('div');
        game.counterElement.textContent = game.counter;
        game.counterElement.className = 'counter';
        document.getElementById('app').appendChild(game.counterElement);

        game.counterInterval = setInterval(game.countdown, 1000);
    },

    countdown() {
        game.counter -= 1;

        game.counterElement.textContent = game.counter;

        if (game.counter === 0) {
            game.deleteCounter();
        }
    },

    deleteCounter() {
        clearInterval(game.counterInterval);

        game.counterElement.remove();
    },
};

document.addEventListener('DOMContentLoaded', game.init);
