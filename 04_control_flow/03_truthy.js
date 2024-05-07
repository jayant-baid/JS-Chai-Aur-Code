const userEmail = [];

if (userEmail) {
  console.log("Got user email"); // Run
} else {
  console.log("Don't have user email");
}

//! Falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//! Truthy Values
// Rest all values are truthy
// "0", 'false', " ", [], {}, function(){} -> empty function

if (userEmail.length === 0) {
  console.log("Array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

//* General Knowledge
// false == 0 -> true
// false == '' -> true
// '' == 0 -> true

//! Nullish Coalescing Operator (??): null undefined
//* Yeh NULL and Undefined ke lie hi bana h
//? To get rid of null and undefined, and if that comes, give an another value like 0, ""
let val1;
// val1 = 5 ?? 10;          // 5
// val1 = null ?? 10;       // 10
// val1 = undefined ?? 15;  // 15
val1 = null ?? 10 ?? 20;    // 10

console.log(val1);

//! Terniary Operator
// condition ? true : false
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
