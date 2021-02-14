const a = 49846;

let number1 = parseInt((a / 10000) % 10);
let number2 = parseInt((a / 1000) % 10);
let number3 = parseInt((a / 100) % 10);
let number4 = parseInt((a / 10) % 10);
let number5 = parseInt(a % 10);

console.log(number1, number2, number3, number4, number5)