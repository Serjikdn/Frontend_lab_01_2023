let myClick = document.querySelector('button');
myClick.addEventListener('click', start)

function start() {
    showAgeString();
}

function getAgeString() {
    let age = +prompt('How old are you? (1-69): ')
    const units = ["", "один", "два", "три", "чотири", "п'ять", "шість", "сім", "вісім", "дев'ять"];
    const teens = ["", "одинадцять", "дванадцять", "тринадцять", "чотирнадцять", "п'ятнадцять", "шістнадцять", "сімнадцять", "вісімнадцять", "дев'ятнадцять"];
    const tens = ["", "десять", "двадцять", "тридцять", "сорок", "п'ятдесят", "шістдесят"];
    let nameYear, firstDigit, secondDigit;
    let lastDigit = age - (Math.floor(age / 10) * 10);
    let first = (age - lastDigit) / 10
    if (age >= 1 && age <= 69) {
        if (age >= 11 && age <= 19) {
            firstDigit = teens[lastDigit];
            secondDigit = "";
            nameYear = "років";
        } else {
            if (lastDigit === 1) {
                firstDigit = tens[first];
                secondDigit = units[lastDigit];
                nameYear = "рік";
            } else if (lastDigit >= 2 && lastDigit <= 4) {
                firstDigit = tens[first];
                secondDigit = units[lastDigit];
                nameYear = "роки";
            } else if (lastDigit => 5 && lastDigit <= 9 || lastDigit === 0) {
                firstDigit = tens[first];
                secondDigit = units[lastDigit];
                nameYear = "років";
            }
        }

    } else if (age < 1) {
        return "You haven't been born yet, you're just in project."
    } else {
        return "Not many people live to that age, are you sure you're not a robot?"
    }
    return `${age} (${firstDigit} ${secondDigit} ${nameYear})`
}

function showAgeString() {
    result = getAgeString();
    alert(result);
    taskResult.innerHTML = result;
}