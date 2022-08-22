const game = {
    colors: ['red', 'green', 'blue', 'yellow'],

    init: () => {
        game.drawCells();
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
};

document.addEventListener('DOMContentLoaded', game.init);
