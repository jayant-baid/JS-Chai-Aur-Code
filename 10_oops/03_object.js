// JS: prototypal lang h, mtlb yeh dhundti rhti h, haar nhi manti
// iss level pe nhi mili toh next level, uspe nhi toh grand level, .....

function multiplyBy5(num) {
  return num * 5;
}

// console.log(multiplyBy5(5));

multiplyBy5.power = 2;
console.log(multiplyBy5); // [Function: multiplyBy5] { power: 2 }
console.log(multiplyBy5.power); // 2

console.log(multiplyBy5.prototype); // {}
//* JS me harr ek cheez object hoti h
//? func: func bhi h aur obj bhi h
// func ki working func ki tarah hi work karti h, 
// lekin hum chahe toh usse obj ki tarah behave kara skte h

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
  // this mtlb jissne: jisne bhi bulaya h uske pass chala jaega
};
createUser.prototype.printMe = function () {
  console.log(`Score is ${this.score}`);
};

// const jb = createUser("JB plays", 200);
// const j2 = createUser("J2 Factz", 430);

// jb.increment();
// jb.printMe();
//* Give error: Cannot read properties of undefined (reading 'increment')

// So iss problem ko solve karta h new keyword

const jb = new createUser("JB plays", 200);
const j2 = new createUser("J2 Factz", 430);
// new keyword ke use ke through hi yeh prototype ki values inject hui h

jb.increment();
jb.printMe();

/*
? Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the 
constructor function. This means that it has access to properties and methods defined on the 
constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments 
and this is bound to the newly created object. If no explicit return value is specified from 
the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return 
a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/