const game = {
    colors: ['red', 'green', 'blue', 'yellow'],

    sequence: [],

    init: () => {
        game.drawCells();
        document.getElementById('play').addEventListener('click', game.newGame);
    },

    drawCells: () => {
        const simonDiv = document.getElementById('app');
        game.colors.forEach((color) => {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.id = color;
            cell.style.backgroundColor = color;
            simonDiv.appendChild(cell);
        });
    },

    newGame: () => {
        game.sequence = [];
        for (let index = 0; index < 3; index += 1) {
            const random = Math.floor(Math.random() * 4);
            game.sequence.push(game.colors[random]);
        }

        game.simonSays(game.sequence);
    },

    simonSays: (sequence) => {
        if (sequence && sequence.length) {
            game.showMessage('Mémorisez la séquence');
            setTimeout(game.bumpCell, 500, sequence[0]);
            setTimeout(game.simonSays, 850, sequence.slice(1));
        } else {
            // player turn
        }
    },

    bumpCell: (color) => {
        document.getElementById(color).style.borderWidth = '45px';
        setTimeout(() => {
            document.getElementById(color).style.borderWidth = '0';
        }, 150);
    },

    showMessage: (message) => {
        document.getElementById('welcome').classList.add('hidden');
        document.getElementById('message').classList.remove('hidden');
        document.getElementById('message').innerHTML = message;
    },
};

document.addEventListener('DOMContentLoaded', game.init);
