//! {} => Scope

// Browser console scope is diff from that of the node scope, which we use will coding(code env)

let a = 300;
const b = 20;
// var c = 30
if (true) {
  //* Block Scope
  let a = 10;
  const b = 20;
  //   var c = 300; // can be accessed outside this scope
  console.log("INNER: ", a);
}

console.log(a);
console.log(b);
// console.log(c); // 300

function one() {
  const username = "jayant";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  console.log(website); // Not able to get the value give error

  two();
}

// one();

if (true) {
  const username = "jayant";
  if (username === "jayant") {
    const website = " youtube";
    console.log(username + website);
  }
  //   console.log(website); //error
}

// console.log(username); // error

//! ++++++++++++++++++ Interesting ++++++++++++++++++

console.log(addone(5)); // No error

function addone(num) {
    return num + 1;
}
console.log(addone(5)); // No error


console.log(addTwo(5)); // error: Cannot access 'addTwo' before initialization
//* Comes in the concept of Hoisting
// Function Expression
const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(5)); // O/P: 7