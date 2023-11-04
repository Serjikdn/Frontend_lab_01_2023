let myClick = document.querySelector('button');
myClick.addEventListener('click', start)

function start() {
    drawStar();
}

function drawStar() {
    let rows = 8
    for (let i = 1; i <= rows; i++) {
        let star = '';
        for (let j = 1; j <= i; j++) {
            star += '*';
        }
        console.log(star);
    }
}

