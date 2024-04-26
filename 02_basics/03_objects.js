// Singleton -> constructor ke through object bana h
// Literals ke through object nhi banana h
//Object.create // Constructor method

const mySym = Symbol("key1");

// object literals
const JsUser = {
  name: "Jayant", // behind the scenes, name is stores as string, "name"
  "full name": "Jayant Baid",
  age: 20,
  location: "Delhi",
  email: "jayant@google.com",
  isLoggedIn: false,
  [mySym]: "mykey1", // want symbol as key
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "jayant@chatgpt.com";

// Object.freeze(JsUser) //! Prevents the modification of existing property attributes and values, and prevents the addition of new properties

JsUser.email = "jayant@microsoft.com";
console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello!, JS User!");
};
console.log(JsUser.greeting); // function reference

console.log(JsUser.greeting());
// Hello!, JS User! // function body clg
// undefined -> because JsUser.greeting() is not returning anything

JsUser.greeting2 = function () {
  console.log(`Hello Js User!, ${this["full name"]}`);
};
JsUser.greeting2();
// function() yeh use kia h islie this keyword chl gya but agar hum arrow function ka use karenge tb this keyword nhi chlega
// The this keyword in JavaScript refers to an object
