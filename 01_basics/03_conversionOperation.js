//! CONVERSIONS
let score = "33";

console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score);
console.log(valueInNumber, typeof valueInNumber); // 33 number

let score1 = "33sdz";
let valueInNumber1 = Number(score1);
console.log(valueInNumber1, typeof valueInNumber1); // NaN number

let score2 = null;
let valueInNumber2 = Number(score2);
console.log(valueInNumber2, typeof valueInNumber2); // 0 number

let score3 = undefined;
let valueInNumber3 = Number(score3);
console.log(valueInNumber3, typeof valueInNumber3); // NaN number

let score4 = true;
let valueInNumber4 = Number(score4);
console.log(valueInNumber4, typeof valueInNumber4); // 1 number

//* "33" => 33
//* "33asac" => NaN
//* true => 1 / false => 0

// let isLoggedIn = 1; // true
// let isLoggedIn = ""; // false
let isLoggedIn = "Jayant"; // true
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

let someNumber = 343;
let stringNumber = String(someNumber);

stringNumber = stringNumber + 69;

console.log(stringNumber, typeof stringNumber);

//! OPERATIONS
let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2 + 2); //4
console.log(2 - 2); //0
console.log(2 * 2); //4
console.log(5 / 2); //2.5
console.log(2 ** 4); //16
console.log(65 % 2); //1

//? Concatination of strings
let str1 = "hello";
let str2 = "Jayant";
let str3 = str1 + " " + str2;
console.log(str3);

console.log("1" + 2 + 3 + (2 + 3)); //1235
console.log(2 + 3 + "1"); //51
// Reason is the ecma standards

//? We are trying to do tricky conversions
console.log(+true); //1
console.log(+false); //0
console.log(+""); //0
console.log(+"Jayant"); //NaN

let gamecnt = 100;
gamecnt++;
console.log(gamecnt);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
