const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Add 10 in each value
const newArr = myNumbers.map((num) => {
  return num + 10;
});
console.log(myNumbers); //[1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
console.log(newArr); //[11, 12, 13, 14, 15,16, 17, 18, 19, 20]

//! Chaining
const newNums = myNumbers
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num)=> num>=40);
console.log(newNums)