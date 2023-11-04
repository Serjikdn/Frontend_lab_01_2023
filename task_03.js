let myClick = document.querySelector('button');
myClick.addEventListener('click', start)

function start() {
    showDate();
}

function getDate() {
    let userDate = prompt("Enter the date (YYYY-MM-DD):");
    userDate = new Date(userDate);
    // День перед заданою датою
    let dayBefore = new Date(userDate);
    dayBefore.setDate(userDate.getDate() - 1);

    // День після заданої дати
    let dayAfter = new Date(userDate);
    dayAfter.setDate(userDate.getDate() + 1);
    return [userDate, dayBefore, dayAfter]
}

function showDate() {
    let result = getDate();
    let [sourceDate, dayBefore, dayAfter] = getDate(userDate);

    alert(`Source day: ${sourceDate.toLocaleDateString()}\nday before: ${dayBefore.toLocaleDateString()}\nday after: ${dayAfter.toLocaleDateString()}`);
    taskResult.innerHTML = `Source day: ${sourceDate.toLocaleDateString()}<br>
                            day before: ${dayBefore.toLocaleDateString()}<br>
                            day after: ${dayAfter.toLocaleDateString()}`
}
