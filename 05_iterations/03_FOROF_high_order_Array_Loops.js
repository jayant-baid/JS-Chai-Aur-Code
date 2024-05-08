//! For OF

// Array -> ["","",""]
//       -> [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  console.log(num);
}

const greetings = "Hello, world!";
for (const greet of greetings) {
  console.log("Each Char is: ", greet);
}

//* MAPS -> unique values
const mpp = new Map();
mpp.set("IN", "India");
mpp.set("USA", "United States of America");
mpp.set("Fr", "France");
mpp.set("IN", "India");

console.log(mpp);
for (const [key, value] of mpp) {
  console.log(key, " :- ", value);
}

const myObj = {
  Game1: "NFS",
  Game2: "Spiderman",
  Game3: "Indie Games",
};
//? myObj is not iterable
// for (const [key, value] of myObj) {
//   console.log(key, " :- ", value);
// }
