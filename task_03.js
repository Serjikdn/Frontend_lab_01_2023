let myClick = document.querySelector('button');
myClick.addEventListener('click', start)

function start() {
    getDate();
}

function getDate() {
    let userDate = +prompt("Enter the date (YYYY-MM-DD):");
    let date = new Date(userDate);
    let yesterday = date.getDay() - 1;
    let tomorrow = date.getDay() + 1;
    alert('Result: ' + yesterday + tomorrow);

    taskResult.innerHTML = `User number: ${userDate}<br> result: ${result}`
}