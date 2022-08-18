const game = {

    init() {
        const playBtn = document.getElementById('play');

        playBtn.addEventListener('click', game.start);

        document.addEventListener('keyup', (event) => {
            if (event.code === 'Space') {
                game.start();
            }
        });
    },

    start() {
        document.getElementById('welcome').classList.add('hidden');
        document.getElementById('app').classList.remove('hidden');
        game.createDice();
    },

    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
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
