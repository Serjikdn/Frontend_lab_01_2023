let myClick = document.querySelector('button');
myClick.addEventListener('click', start)

function start() {
    drawStar();
}

function drawStar() {
    const size = 15; // Розмір символу "+"
    let plus = '';
    let half = Math.floor(size / 2)

    for (let i = 1; i < size - 1; i++) {
        let row = '';
        for (let j = 0; j < size; j++) {
            if (i === half || j === half) {
                row += '*';
            } else {
                row += ' ';
            }
            if (i === j + 1 || i + j === size - 1) {
                row += '*';
            } else {
                row += ' ';
            }
        }
        plus += row + '\n';
    }

    console.log(plus);
}


