const game = {

    invaderDiv: document.getElementById('app'),

    gridSize: 8,
    cellSize: 30,

    init: () => {
        game.createGrid();
    },

    createGrid: () => {
        const table = document.createElement('table');

        game.invaderDiv.innerHTML = '';

        for (let i = 0; i < game.gridSize; i += 1) {
            const tr = document.createElement('tr');

            table.appendChild(tr);

            for (let j = 0; j < game.gridSize; j += 1) {
                const td = document.createElement('td');

                td.style.width = `${game.cellSize}px`;
                td.style.height = `${game.cellSize}px`;

                tr.appendChild(td);
            }
        }

        game.invaderDiv.appendChild(table);
    },
};

document.addEventListener('DOMContentLoaded', game.init);
