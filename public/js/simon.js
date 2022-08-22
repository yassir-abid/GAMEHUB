const game = {
    colors: ['red', 'green', 'blue', 'yellow'],

    sequence: [],
    timer: undefined,
    indice: 0,
    isAllowedToPlay: false,

    init: () => {
        game.drawCells();
        document.getElementById('play').addEventListener('click', game.newGame);
        document.getElementById('replay').addEventListener('click', game.newGame);
    },

    drawCells: () => {
        const simonDiv = document.getElementById('app');
        game.colors.forEach((color) => {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.id = color;
            cell.style.backgroundColor = color;
            simonDiv.appendChild(cell);
            cell.addEventListener('click', () => {
                if (!game.isAllowedToPlay) {
                    return;
                }
                clearTimeout(game.timer);
                game.bumpCell(color);
                if (color === game.sequence[game.indice]) {
                    if (game.indice < game.sequence.length - 1) {
                        game.indice += 1;
                        game.timer = setTimeout(game.gameOver, 5000);
                    } else {
                        game.nextMove();
                    }
                } else {
                    game.gameOver();
                }
            });
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

    nextMove: () => {
        const random = Math.floor(Math.random() * 4);
        game.sequence.push(game.colors[random]);
        game.indice = 0;
        game.simonSays(game.sequence);
    },

    simonSays: (sequence) => {
        if (sequence && sequence.length) {
            game.isAllowedToPlay = false;
            game.showMessage('Mémorisez la séquence');
            setTimeout(game.bumpCell, 500, sequence[0]);
            setTimeout(game.simonSays, 850, sequence.slice(1));
        } else {
            game.isAllowedToPlay = true;
            game.showMessage('Reproduisez la séquence');
            game.timer = setTimeout(game.gameOver, 5000);
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
        document.getElementById('replay').classList.add('hidden');
        document.getElementById('message').classList.remove('hidden');
        document.getElementById('message').innerHTML = message;
    },

    gameOver: () => {
        game.isAllowedToPlay = false;
        game.showMessage(`Partie terminée. Votre score: ${game.sequence.length}`);
        document.getElementById('replay').classList.remove('hidden');
        game.sequence = [];
    },
};

document.addEventListener('DOMContentLoaded', game.init);
