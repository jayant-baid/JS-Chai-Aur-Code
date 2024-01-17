//* Primitive
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

/* JavaScript is a dynamically typed language, 
which means that data types of variables are determined by the value they hold at runtime 
and can change throughout the program as we assign different values to them.
*/

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
console.log(id); //Symbol('123')
const anotherId = Symbol("123");

console.log(id === anotherId); //0 => because symbol provides uniqueness

// const bigNumber = 3456543576654356754n

//* Reference (Non primitive)
// Array, Objects, Functions
// Sbke typeof object/function hi h
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "Jayant",
  age: 21,
};

const myFunction = function () {
  console.log("Hello JB");
};
// myFunction();

console.log(typeof anotherId); //symbol
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof myFunction); // function object
console.log(typeof heros); // object

// https://262.ecma-international.org/5.1/#sec-11.4.3
