const name = "Jayant Baid";
const repoCount = 50;

console.log(name + " repo count: " + repoCount); // NOT A GOOD PRACTICE

// BETTER, READABLE, MODERN WAY
// string interpolation
// Benefits: hum on the go, changes kar skte h -> uppercase
console.log(`Hello, ${name.toUpperCase()}, repo count: ${repoCount}`);

const gameName = new String("Jayant baid gaming ytber");
console.log(gameName, typeof gameName); //object
// string having indexes and can use inbuilt prototype functions
console.log(gameName[2], gameName.length);
console.log(gameName.__proto__); // give all the func which we can use on the string
console.log(gameName.toLowerCase());
console.log(gameName.charAt(7)); //y
console.log(gameName.indexOf("t")); //5

const newString = gameName.substring(0, 5); // 0 includes, 5 not included
// Can't give -ve no.
console.log(newString);
const anotherString = gameName.slice(0, 4);
console.log(anotherString); // [0, 4)
console.log(gameName.slice(3)) // start from 3 and end till end
console.log(gameName.slice(-8,5)); // negative means start from ending (-8 means the index of 8 from the end)

//! Convert string into array by splitting it by " " 
console.log(gameName.split(" "));
console.log(gameName.split(" ",3)); 
// split karne ke baad kitni values show karni h uski limit ke lie use hota h limiter

const newStringOne="    jayant  ";
console.log(newStringOne);
console.log(newStringOne.trim());

//! replace %20 with "-" 
const url="https://jayant.com/jayant%20baid%20youtuber"
console.log(url.replace("%20", "-")); //replace one time only in the string
console.log(url.replaceAll("%20", "-")); //replace all values in the string

console.log(url.includes("jayant"));
console.log(url.includes("jayantbaid"));

//! REFER mdn, if you want to see another methods