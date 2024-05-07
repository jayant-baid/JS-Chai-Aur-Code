//! if
/* Syntax
if (condition) {
    statements
}
*/

//*  <, >, <=, >=, ==, !=, ===, !==
if (2 == "2") {
  console.log(`Executed 2=="2"`); // Run
} else {
  console.log(`Executed 2!=="2"`);
}

if (2 === "2") console.log(`Executed 2==="2"`);
else console.log(`Executed 2!=="2"`); // Run

const isUserloggedIn = true;
if (isUserloggedIn) console.log("User is logged in");
else console.log("User is not logged in");

const temperature = 41;
if (temperature === 40) {
  console.log("Equal to 40");
} else {
  console.log("temperature is not equal to 40");
}

console.log("Executed");

//! Scope Related
const score = 200;

if (score > 100) {
  let power = "fly"; // if we use var, then it can be accessed outside also
  console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`); // error

//! Shorthand Notation -> without brackets
const balance = 1000;
if (balance > 500) console.log("test");

//! Multiple lines without brackets
//* Not Recommended -> Not readable
if (balance > 500) console.log("test"), console.log("test2");

//! Nested IF ELSE
if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("greater than 900");
}

//! Check Multiple Conditions in IF 
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}
