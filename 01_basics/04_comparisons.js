console.log(2 > 1); //1
console.log(2 >= 1); //1
console.log(2 < 1); //0
console.log(2 == 1); //0
console.log(2 != 1); //1

//! Problems yaha se start ho jati h 
console.log("2" > 1); //1
console.log("02" > 1); //1
console.log("2sd" > 1); //0

//! Confusion -> Predicting result nhi deta
console.log(null > 0); //0
console.log(null == 0); //0
console.log(null >= 0); //1
//* Concept: == (equality check) and >,<,>=,<= (comparisons) works differently
// comparison convert null to a number, treating it as 0. That's why
// null >=0 ==> 0 >= 0 -> true
// null > 0 ==> 0 > 0 -> false

console.log(undefined == 0); //0
console.log(undefined > 0); //0
console.log(undefined < 0); //0
// Undefined ke sath ans false hi aaega

// === Strick Check (check value and datatype)
console.log("2" === 2); //0
