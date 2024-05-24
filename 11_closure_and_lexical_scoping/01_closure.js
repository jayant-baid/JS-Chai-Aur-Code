/*
! Closure gives you access to an outer function's scope 
! from an inner function

* closures are created every time a function is created, 
* at function creation time.
*/

function init() {
  let name = "Jayant Baid"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

/*
The displayName() function has no local variables of its own. However, 
since inner functions have access to the variables of outer functions, 
displayName() can access the variable name declared in the parent function, init(). 
* -> This is called Lexical Scoping
*/

function outer() {
  let userName = "jayant";
  //   console.log("Outer: ", secret); // error
  function inner() {
    let secret = "123";
    console.log("Inner: ", userName);
  }
  function innerTwo() {
    console.log("innerTwo: ", userName);
    // console.log(secret); // error
  }
  inner();
  innerTwo();
}
outer();
// console.log("Too Outer: ", username) // error

//! Closure
function makeFunc() {
  const name = "Closure: Jayant Baid";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();
/*
makeFunc() execute ho gya h, khtm ho chuka, but yaha pe memory ka khel aa jata h
Memory ke reference ka role aa jata h
return me sirf displayName nhi jata h, uska agar outer func exist karta h, uska bhi pura scope jaega
Lexical scoping ki wajah se hi jata h -> puri memory share hoti h
*/