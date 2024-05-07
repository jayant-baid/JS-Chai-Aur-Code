//! when we want to refer to the current context, we use "this" keyword

const user = {
  username: "Jayant",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this); // gives the details of the current object
  },
};

user.welcomeMessage(); //Jayant, welcome to website

user.username = "JB Plays";
user.welcomeMessage(); // JB Plays, welcome to website

console.log(this); // {},
//! because we are using the node environment. So in this, our this keyword is referring to the empty object

//! But if we use this keyword in the browser console, we will get the "window" object which contains a lot of windows related func

function chai() {
  let username = "jayant";
  console.log(this);
  console.log(this.username); //undefined
  // this is not related to the function, it is just related to the objects
}

// chai();

const chai2 = function () {
  let username = "jayant";
  console.log(this); // same as of chai func
  // gives a alg hi object having so many properties
  console.log(this.username); //undefined
};

// chai2();

const chai3 = () => {
  let username = "jayant";
  console.log(this); // {}

  console.log(this.username); // undefined
};
chai3();

//* Explicit Return
const addTwo = (n1, n2) => {
  return n1 + n2;
};
console.log(addTwo(54, 5456));

//* Implicit Return
const addTwo2 = (n1, n2) => n1 + n2;

// {} brackets me likha toh return is necessary
// () brackets me likha toh return ki jarurat nhi

const returnObject = (n1, n2) => ({ username: "Jayant Plays" });
//return the object
console.log(returnObject(4, 3));

// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach( () => ())
