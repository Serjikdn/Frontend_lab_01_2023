let myClick = document.querySelector('button');
myClick.addEventListener('click', start)

function start() {
    showSum();
}

function calcSum() {
    let input, sum = 0;
    let inputList = []

    while (true) {
        input = +prompt('Enter the number for sum(0- show amount):')
        if (isNaN(input)) {
            alert('Not is number!')
            continue
        }
        if (input === 0){
            return [sum, inputList]
        }
        inputList.push(input)
        sum += input;
    }
}

function showSum() {
    let result = calcSum()
    alert(`Sum of numbers: ${result[1]}\nEqual ${result[0]}`)
}
