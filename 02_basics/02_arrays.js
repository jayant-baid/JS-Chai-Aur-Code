const marvelHeros = ["spiderman", "ironman", "thor"];
const dcHeros = ["superman", "flash", "batman"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros); // o/p-> array inside array
// console.log(marvelHeros[3][1]);

const newArr = marvelHeros.concat(dcHeros);
console.log(newArr); // All heroes -> return new array containing both elements

//! Spread Operator
const newArr1 = [...marvelHeros, ...dcHeros];
console.log(newArr1);

//! Flat Operator
const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const realAnotherArr = anotherArr.flat(Infinity); // (depth) -> kitni depth tk flat karna chahte ho, in this case, we can write 2, but infinity se woh automatically sbkuch ko 1 array ke elements me convert kar dega
console.log(realAnotherArr); // Array containing all elements of anotherArr spread throughout
// [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

console.log(Array.isArray("Jayant")); //false

console.log(Array.from("Jayant")); //[ 'J', 'a', 'y', 'a', 'n', 't' ]
console.log(Array.from({ name: "Jayant" })); //[]
// Humme batana padega ki kis ka array banau, keys ka, ya fir values ka

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); //Returns a new array from a set of elements
