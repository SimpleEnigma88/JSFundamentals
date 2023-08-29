//#1 Objective: Understand the basic concepts of JavaScript

/* console.log("Hello World!"); */

//#2 Objective: Work with data types and variables in JavaScript

/* const name = "Andy";
console.log(name); */

//#3 Objective: Use operators for mathematical computations and comparisons

/* let length, width, area;
console.log(length * width); */

//#4 Objective: Implement conditional statements for decision-making

/* let number = 5;

if (number % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
} */

//#5 Objective: Control program flow using loops

/* for (let i = 1; i <= 10; i++) {
    console.log(i);
} */

//#6 Objective: Understand the basic concepts of JavaScript

/* const name = prompt("What is your name?");
console.log(`Hello ${name}!`); */

//#7 Objective: Use operators for mathematical computations and comparisons

/* const number = prompt("Enter a number:");
let result = 1;
for (let i = 1; i <= number; i++) {
    result *= i;
}
console.log(result); */

//#8 Objective: Implement conditional statements for decision-making

/* const year = prompt("Enter a year:");
if (year % 100 === 0) {
    if (year % 400 === 0) {
        console.log("Leap Year!");
    } else {
        console.log("Not a Leap Year!");
    }
} else if (year % 4 === 0) {
    console.log("Leap Year!");
} else {
    console.log("Not a Leap Year!");
} */

//#9 Objective: Control program flow using loops

/* let i = 1;
let sum = 0;
while (i <= 100) {
    sum*= i;
    i++;
}
console.log(sum); */

//#10 Objective: Work with data types and variables in JavaScript

/* const numbers = {};
numbers[0] = parseInt(prompt("Please enter a number: "));
numbers[1] = parseInt(prompt('Please enter a second number: '));
let add = (numbers[0] + numbers[1]);
let sub = (numbers[0] - numbers[1]);
let multi = (numbers[0] * numbers[1]);
let divide = (numbers[0] / numbers[1]);

console.log(`${numbers[0]} plus ${numbers[1]} = ${add}`);
console.log(`${numbers[0]} minus ${numbers[1]} = ${sub}`);
console.log(`${numbers[0]} multiplied by ${numbers[1]} = ${multi}`);
console.log(`${numbers[0]} divided by ${numbers[1]} = ${divide}`);  */

//#11 Aim: Create a variable for every JavaScript Data Type

/* const stringy = 'string!';
const number = 54;
const bool = false;
const nullVal = null;
const notSure = undefined;
const myObj = {};
const myArr = [];
const wut; */

//#12 Aim: Dynamically display a list of food items and prices using HTML & JavaScript

const foodList = [{ name: 'Banana', price: 1.34 }, { name: 'Apple', price: .75 }, { name: 'Orange', price: .75 }];

let ul = document.querySelector("ul");

foodList.forEach((ele) => {
    let li = document.createElement("li");
    li.textContent = `${ele.name}: $${ele.price}`;
    ul.appendChild(li);
});

//#13 Aim: Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

/* function multiplesArray(num, length) {
    let myArr = new Array();
    let i = 1;
    while (i <= length) {
        myArr.push(num * i);
        i++;
    }
    console.log(myArr);
}

multiplesArray(17, 7); */

//#14 Objective: Implement conditional statements for decision-making

/* function numSign(num) {
    return Math.sign(num) === 1 ? console.log("Positive number!")
        : Math.sign(num) === -1 ? console.log("Negative number!") : console.log("Zero!");
}

numSign(0); */

//#15 Control program flow using loops

/* function multiTable(num) {
    let i = 1;
    while (i <= 10) {
        console.log(`${num} x ${i} = ${i * num}`);
        i++;
    }
}

multiTable(7); */

//#16 Aim: Create a function that checks if a given number is prime.

function isPrime(num) {
    num = Math.abs(num);
    let prime = true;
    if (num < 2) {
        console.log("Not a prime number!");
    } else {
        let i = 2;
        while (i < num) {
            if (num % i === 0) {
                prime = false;
            }
            i++;
        }
        prime ? console.log("Prime number!") : console.log("Not a prime number!");
    }
}

isPrime(37);