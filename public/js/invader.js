const game = {

    invaderDiv: document.getElementById('app'),

    styles: [
        'plain',
        'empty',
        'light',
        'highlight',
    ],
    selectedColor: 'plain',

    init: () => {
        game.createGrid(8, 30);
        game.initPalette();
        game.handleForm();
    },

    createGrid: (gridSize, cellSize) => {
        game.invaderDiv.innerHTML = '';

        const table = document.createElement('table');

        table.addEventListener('click', (event) => {
            for (let i = 0; i < game.styles.length; i += 1) {
                event.target.classList.remove(game.styles[i]);
            }

            event.target.classList.toggle(game.selectedColor);
        });

        for (let i = 0; i < gridSize; i += 1) {
            const tr = document.createElement('tr');

            table.appendChild(tr);

            for (let j = 0; j < gridSize; j += 1) {
                const td = document.createElement('td');

                td.style.width = `${cellSize}px`;
                td.style.height = `${cellSize}px`;

                tr.appendChild(td);
            }
        }

        game.invaderDiv.appendChild(table);
    },

    initPalette: () => {
        game.styles.forEach((style) => {
            document.getElementById(`palette__button__${style}`)
                .addEventListener('click', (event) => {
                    game.selectedColor = style;

                    document.querySelector('.palette__button--active').classList.remove('palette__button--active');

                    event.target.classList.add('palette__button--active');
                });
        });
    },

    handleForm: () => {
        const form = document.getElementById('form');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const userGridSize = event.target[0].valueAsNumber;
            const userPixelSize = event.target[1].valueAsNumber;

            game.createGrid(userGridSize, userPixelSize);
        });
    },
};

document.addEventListener('DOMContentLoaded', game.init);
