const arr = [1, 2, 3, 5, 6];
console.log(arr, arr[0]);

const myHeros = ["shaktiman", "naagraj", "Jayant"];
const myArr2 = new Array(1, 2, 3, 5, 6);
console.log(myArr2);

//! Methods
arr.push(7);
arr.push(8);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(23); //add in the starting -> time consuming but requirement is the main criteria
console.log(arr);

arr.shift(); //remove in the starting
console.log(arr);

console.log(arr.includes(8)); // boolean type ans
console.log(arr.indexOf(5)); // index

const newArr = arr.join(); //we can add special separators which will be added in the ans
console.log(newArr); //1,2,3,5,6,7 -> string

//* slice, splice
// arr -> [ 1, 2, 3, 5, 6, 7 ]
const myn1 = arr.slice(1, 3);
console.log(myn1); //[2,3]
console.log(arr);

//? Remove those elements in the splice range and add them in the new array and remaining elements will be acted as the previous array
const myn2 = arr.splice(1, 3);
console.log(myn2); //[2, 3, 5]
console.log(arr);
