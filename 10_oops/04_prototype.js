//! Want to create a method which will print its length after triming
let myName = "jayant     ";
let myChannel = "jayant baid      ";

// console.log(myName.trim().length)
// console.log(myName.trueLength());

let myHeros = ["thor", "spiderman"];
let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

// heroPower.jayant(); // is not a function, but want that

Object.prototype.jayant = function () {
  console.log(`Jayant is present in all objects`);
};

// heroPower.jayant() // object ke pass hogi
myHeros.jayant(); // array ke pass bhi jaegi

Array.prototype.heyJ2 = function () {
  console.log(`Jayant says hello`);
};
myHeros.heyJ2();
// heroPower.heyJ2(); // not have power of heyj2

//! INHERITANCE
const User={
    name: "jayant",
    email:"jayant@google.com"
}

const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
    isAvail: false,
};
const TASupport = {
    makeAssign: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport
};

//? Approach is outdated 
Teacher.__proto__ = User;

Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUserName = "Jayant baid         ";
String.prototype.trueLength = function(){
    // console.log(`${this}`)
    console.log(`True length of ${this} is ${this.trim().length}`);
}
anotherUserName.trueLength();
"jayant".trueLength();
"youtube".trueLength();