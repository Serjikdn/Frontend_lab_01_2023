let myClick = document.querySelector('button');
myClick.addEventListener('click', start)

function start() {
    showSum();
}

function raiseDigit() {
    let inputA = prompt('Enter number A:');
    let inputS = +prompt('Enter digit S:');
    let inputN = +prompt(`Enter position digit of number: ${inputA}`);

    let digitN = parseInt(inputA[inputN-1]);
    return [inputA, inputS, inputN, digitN, Math.pow(digitN, inputS)]
}

function showSum(){
    let result = raiseDigit();
    if (result[2] > 0 && result[2] < result[0].length){
        alert(`Number: ${result[0]}\nDegree: ${result[1]}\nPosition: ${result[2]}\nResult ${result[3]}^${result[1]}: ${result[4]}`);
        taskResult.innerHTML = `Number: ${result[0]}<br>Degree: ${result[1]}<br>Position: ${result[2]}<br>Result ${result[3]}^${result[1]}: ${result[4]}`;
    } else alert('Wrong data');
}
