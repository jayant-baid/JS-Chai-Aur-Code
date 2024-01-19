//! +++++++++++++++++++ NUMBERS +++++++++++++++++++
const score = 400;
console.log(score); //400
//* Explicitly, dedicate the variable to number
const balance = new Number(3522);
console.log(balance, typeof balance); //[Number: 3522] object

console.log(balance.toString(), balance.toString().length); //3522 4

console.log(balance.toFixed(2)); //3522.00

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(4)); //23.90
console.log(otherNumber.toPrecision(3)); //23.9
console.log(otherNumber.toPrecision(2)); //24
console.log(otherNumber.toPrecision(1)); //2e+1
// total kitni digits chahie after roundoff
//? Returns the string

const otherNumber1 = 1123.8966;
console.log(otherNumber1.toPrecision(3)); //1.12e+3
// Be carefull while using thia

const hundreds = 1000000;
console.log(hundreds.toString()); //1000000
console.log(hundreds.toLocaleString()); //10,00,000
console.log(hundreds.toLocaleString("en-US")); //1,000,000
//* Converts a number to a string by using the current or specified locale

//! +++++++++++++++++++ MATHS +++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4)); // | -4 | = 4
console.log(Math.round(5.7432)); //roundoff to the nearest integer
console.log(Math.ceil(5.2)); //smallest integer greater than or equal to its numeric
console.log(Math.floor(4.8)); //greatest integer less than or equal to its numeric

// sqrt, pow, min, max

console.log(Math.random()); // 0-1 ke beech me values
console.log(Math.random() * 10 + 1); // +1 to avoid 0, when we apply floor(), we want range from 1-10
console.log(Math.floor(Math.random() * 10) + 1); // 1-10 ke beech me integer values

//! Range between min & max inclusive
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + 1);
