const a = +prompt("first number");
const b = +prompt("second number");
const c = +prompt("third number");

const sum = a + b + c;
const sum1 = (a + b + c)/3;

if (a % 2 === 0) {
    console.log("The first number is even")
} else if (a % 2 === 1) {
    console.log("The first number is not even")
};

if (b % 2 === 0) {
    console.log("The second number is even")
} else if (b % 2 === 1) {
    console.log("The second number is not even")
};

if (c % 2 === 0) {
    console.log("The third number is even")
} else if (c % 2 === 1) {
    console.log("The third number is not even")
};


console.log("sum=",sum,"; average=",sum1)