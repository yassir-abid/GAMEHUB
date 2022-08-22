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

    numberOfMoves: 0,

    gameOver: false,

    init: () => {
        game.listenKeyboardEvents();
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
        game.isGameOver();
    },

    listenKeyboardEvents: () => {
        document.addEventListener('keyup', (event) => {
            if (event.key === 'ArrowLeft') {
                game.turnLeft();
            } else if (event.key === 'ArrowRight') {
                game.turnRight();
            } else if (event.key === 'ArrowUp') {
                game.moveForward();
            }
        });
    },

    turnLeft: () => {
        if (game.gameOver) {
            return;
        }

        game.numberOfMoves += 1;

        if (game.player.direction === 'up') {
            game.player.direction = 'left';
        } else if (game.player.direction === 'right') {
            game.player.direction = 'up';
        } else if (game.player.direction === 'down') {
            game.player.direction = 'right';
        } else if (game.player.direction === 'left') {
            game.player.direction = 'down';
        }

        game.redrawBoard();
    },

    turnRight: () => {
        if (game.gameOver) {
            return;
        }

        game.numberOfMoves += 1;

        if (game.player.direction === 'up') {
            game.player.direction = 'right';
        } else if (game.player.direction === 'right') {
            game.player.direction = 'down';
        } else if (game.player.direction === 'down') {
            game.player.direction = 'left';
        } else if (game.player.direction === 'left') {
            game.player.direction = 'up';
        }

        game.redrawBoard();
    },

    moveForward: () => {
        if (game.gameOver) {
            return;
        }

        game.numberOfMoves += 1;

        if (game.player.direction === 'up' && game.player.y > 0) {
            game.player.y -= 1;
        } else if (game.player.direction === 'right' && game.player.x < 5) {
            game.player.x += 1;
        } else if (game.player.direction === 'down' && game.player.y < 3) {
            game.player.y += 1;
        } else if (game.player.direction === 'left' && game.player.x > 0) {
            game.player.x -= 1;
        }

        game.redrawBoard();
    },

    redrawBoard: () => {
        game.clearBoard();
        game.drawBoard();
    },

    clearBoard: () => {
        game.boardDiv.innerHTML = '';
    },

    isGameOver: () => {
        if (game.player.x === game.targetCell.x && game.player.y === game.targetCell.y) {
            setTimeout(game.displayResult, 100);
            game.gameOver = true;
        }
    },

    displayResult() {
        const result = document.createElement('div');

        result.className = 'result';
        result.textContent = `Gagné en ${game.numberOfMoves} coups !`;

        game.boardDiv.appendChild(result);
    },

};

document.addEventListener('DOMContentLoaded', game.init);
