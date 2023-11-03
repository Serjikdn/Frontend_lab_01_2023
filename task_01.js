const myClick = document.querySelector('button');
myClick.addEventListener('click', start)

function start() {
    howManyGetBurger()
}

function howManyGetBurger() {
    let userMoneyInWallet = +prompt("Enter the amount of money in the wallet");
    let foodItemPrice = +prompt("Enter the price of one burger");
    let numberOfItemsToBuy = ~~(userMoneyInWallet / foodItemPrice);
    let remainingMoney = userMoneyInWallet - (numberOfItemsToBuy * foodItemPrice);
    alert(`You had so much money: ${userMoneyInWallet} UAH\nThe price of one burger: ${foodItemPrice} UAH\nYou can buy this many burgers: ${numberOfItemsToBuy} pcs \n The rest of the money: ${remainingMoney} UAH`)
    taskResult.innerHTML = `You had so much money: ${userMoneyInWallet} UAH<br>
The price of one burger: ${foodItemPrice} UAH<br>
You can buy this many burgers: ${numberOfItemsToBuy} pcs<br>
The rest of the money: ${remainingMoney} UAH<br>`
}

