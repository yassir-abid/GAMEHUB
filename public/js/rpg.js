const game = {

    boardDiv: document.getElementById('board'),

    player: {
        x: 0,
        y: 0,
        direction: 'right',
    },

    targetCell: {
        x: 5,
        y: 3,
    },

    init: () => {
        game.drawBoard();
    },

    drawBoard: () => {
        for (let y = 0; y < 4; y += 1) {
            const row = document.createElement('div');

            row.classList.add('row');

            game.boardDiv.appendChild(row);

            for (let x = 0; x < 6; x += 1) {
                const cell = document.createElement('div');

                cell.classList.add('cell');

                if (x === game.targetCell.x && y === game.targetCell.y) {
                    cell.classList.add('targetCell');
                }

                if (x === game.player.x && y === game.player.y) {
                    const playerDiv = document.createElement('div');

                    playerDiv.classList.add('player');

                    playerDiv.classList.add(`player--${game.player.direction}`);

                    cell.appendChild(playerDiv);
                }

                row.appendChild(cell);
            }
        }
    },

};

document.addEventListener('DOMContentLoaded', game.init);
