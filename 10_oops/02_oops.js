//! Object Literal
const user = {
  // properties
  username: "jayant",
  loginCnt: 0,
  signedIn: true,
  // methods
  getUserDetails: function () {
    console.log(this);
    // this: current context
  },
};

console.log(user.username);
user.getUserDetails();

// Global this
console.log(this); // {} -> for nodejs, Window obj -> for browser

const userTwo = {
  // properties
  username: "jayant",
  loginCnt: 0,
  signedIn: true,
  // methods
  getUserDetails: function () {
    console.log(this);
    // this: current context
  },
};
// yeh firse itna sara kaam karna padega, islie constructor classes aata h kaam me

//! Contructor
// const promise1 = new Promise();
const date = new Date();
// new -> constructor func -> allow to create multiple instances from one obj literal


function User(userName, loginCnt, isLoggedIn){
    this.userName = userName;
    this.loginCnt=loginCnt;
    this.isLoggedIn=isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.userName}`)
    }

    // return implicitly define hota h toh usse likha ya fir nhi, kuch farak nhi padhta h
    return this; // explicitly define kar rhe h
}

// const user1= User('Jayant', 21, true)
// const user2= User('J2 Plays', 2, false)
// console.log(user1)

// user1 me hi values change ho gyi (overwrite ho gyi)
// That's why, use new keyword to create a new instance;

const user1= new User('Jayant', 21, true)
const user2= new User('J2 Plays', 2, false)
console.log(user1.constructor) // khudi ke baare me reference 
// Jo faltu ka mess h woh bhi nhi aa rha h abh

/*
New
1. Sbse pehle ek empty object create hota h, jisko instance kehte h
2. Constructor func call hota h due to new keyword
3. Jo bhi arguements likhe h woh this ke sath inject ho jate h,means uss particular instance ke lie hi woh values hogi
4. Humko mil jate h func, values
*/

//! Instanceof
// The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object
// The return value is a boolean value
/*
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car); // true

console.log(auto instanceof Object); // true
*/