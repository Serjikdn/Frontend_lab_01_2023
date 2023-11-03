const myClick = document.querySelector('button');
myClick.addEventListener('click', start)

function start() {
 changeLastNumber ();
}

function changeLastNumber() {
    let userNumber = +prompt("Enter your number:");
    let lastDigit = Math.floor(userNumber % 10);
    let number = Math.floor(userNumber / 10);
    let result = lastDigit * Math.pow(10, Math.floor(Math.log10(number) + 1)) + number;
    alert('Result: ' + result);

    taskResult.innerHTML = `User number: ${userNumber}<br> result: ${result}`
}
