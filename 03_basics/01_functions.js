function sayMyName() {
  console.log("Jayant");
}

sayMyName();

//!                    parameters
function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}

addTwoNumbers(); // NaN
const result = addTwoNumbers(3, 6);
addTwoNumbers(3, "6"); //36
//!           Arguments

console.log("Result: ", result); //undefined

function addTwoNumbers2(num1, num2) {
  return num1 + num2;
}
const result1 = addTwoNumbers2(4, 6);
console.log(result1);

function loginUserMessage(userName) {
  return `${userName} just logged in`;
}
console.log(loginUserMessage("Jayant"));

console.log(loginUserMessage()); // o/p: undefined just logged in


//!                          Default Value 
function loginUserMessage2(userName="J2") {
//   if (userName === undefined) return `Please enter a user name`;
  if (!userName) return `Please enter a user name`;
  return `${userName} just logged in`;
}

console.log(loginUserMessage2());
console.log(loginUserMessage2("Jayant Baid"));

//! Rest Operator 
function calculateCartPrice(n,...num){
    return num
}

console.log(calculateCartPrice(290,434,535,45)) //Array -> [ 434, 535, 45 ]

const user={
    username: "Jayant Baid",
    prices: 3999
}

function handleObject(anyObject){
    console.log(`UserName is ${anyObject.username} and Price is ${anyObject.price}`)
}

handleObject(user) //UserName is Jayant Baid and Price is undefined
// * Due to prices key in user object

handleObject({
    username: "Jayant Plays",
    price: 693
})

const myarr=[200,2453,54657,76,86,4,46];
function returnSecondValue(getarr){
    return getarr[1];
}
console.log( returnSecondValue(myarr));

console.log( returnSecondValue([434,5,4,53,43,5]));