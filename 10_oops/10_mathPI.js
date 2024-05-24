//! Want to change the value of PI

// Object.getOwnPropertyDescriptor()

console.log(Math.PI); // 3.141592653589793
Math.PI = 5;
console.log(Math.PI); // 3.141592653589793
// Even after trying to change, value hasn't changed

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// Modulue, key
console.log(descriptor);
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}

writable: isko kitna bhi overwrite karne ki koshis karo, isse indetail indepth hardcoded
kar rkhi h c++ h and bahot sare checks lagae hue h ispe, ki yeh change nhi ho skta

* We can also provide these prop to our objects also, so that when used for some framework or something, it can't be over-writable
*/

// const myNewObject = Object.create(null);
const chai = {
  name: "Masala Chai",
  price: 250,
  isAvail: true,

  // forof loop code fatna by inserting a func
  orderChai: function () {
    console.log("Order accepted");
  },
};
console.log(chai);
const chaiDescriptor = Object.getOwnPropertyDescriptor(chai);
console.log(chaiDescriptor); // undefined
/* 
chai toh object h, property toh h nhi, so give property like name, price.... to get descriptor
*/

const chaiDescriptor2 = Object.getOwnPropertyDescriptor(chai, "name");
console.log(chaiDescriptor2);
/*
{
  value: 'Masala Chai',
  writable: true,
  enumerable: true,
  configurable: true
}
*/
//! Enumerable
/*
for (let [key, value] of chai) {
  console.log(`${key} : ${value}`)
}
*/
//? Chai is not iterable
for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
//? Output after adding func
/*
name : Masala Chai
price : 250
isAvail : true
orderChai : function(){
    console.log('Order accepted')
  }

! Hume yeh nhi chahie fir the func, we just want key, value pair, not the body 

After writing if statement, all set
*/

//! Define props of Property like writable
Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

chai.name = "Ginger Chai";
console.log(chai.name);
// clg of chai: { price: 250, isAvail: true }

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
// hume enumerable: false kia h, so name prop show nhi ho rhi
// Agar object ko enumerable nhi karna toh uski sari properties ki 
// enumerable: false karna hoga or we can use defineProperties