//! Immediately Invoked Function Expressions (IIFE)
//? 1. Jese hi function likha usse immediately execute karana h
// Ex: DB Connection, want connection as soon as we start our app
//? 2. Kabhi kabar, child function parent function ki values ko use kar lega, due to which it will pollute the declared values in the func from the global scope

function chai(){
    console.log('DB Connected')
}
chai();

// Immediately Invoke karna h, so we think like this
//! Named IIFE 
(function chai(){
    console.log('DB Connected')
})();
// (function defintion)() -> function execution

// Arror Function IIFE
(()=> {
    console.log("first arrow function")
})(); 

(function baid() {
    console.log("first 2")
})();

// For IIFE, we want semi clone at the end of the function
//! Unnamed IIFE 
((name) => {
    console.log(`DB Connected, ${name}`)
})("Jayant Always Rocks");