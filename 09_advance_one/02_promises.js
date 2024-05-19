/* 
The Promise object represents the eventual 
completion (or failure) of an asynchronous operation 
and its resulting value.

A Promise is in one of these states:
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.
*/
// fetch('url').then().catch().finally()

const promise1 = new Promise((resolve, reject) => {
  // Do an async task
  // -> DB calls, cryptography related, n/w calls

  setTimeout(() => {
    console.log(`Async task is complete`);
    resolve(); // abh yeh connect hua h then() se, resolve kabhi bhi pehle execute nhi hoga chahe isse sbse upar likho ya fir baad me
  }, 1000);
});

// Promise create karlia h abh isse consume bhi karna h
promise1.then(() => {
  console.log("Promise consumed");
});

new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

//* How to got data from promise
const promise3 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve({ user: "Jayant", email: "jayant@yt.com" });
  }, 1000);
}).then(function (user) {
  console.log(user);
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) resolve({ username: "jayant", pass: "best ytber" });
    else reject("Error: Something went wrong");
  }, 1000);
});

// const username = promise4.then((user) => {
//   console.log(user);
//   return user.username;
// });
// console.log(username); // o/p: Promise { <pending> }

promise4
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((uname) => {
    console.log(uname);
  })
  .catch((error) => {
    console.log(error); // Error: Something went wrong
  })
  .finally(() => {
    console.log("Promise done, always come to finally block");
  });

//* Another Approach
const promise5 = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) resolve({ username: "js", pass: "123" });
    else reject("Error: JS went wrong");
  }, 1000);
});

async function consumePromise5() {
  try {
    const res = await promise5;
    console.log("Result: ", res);
  } catch (err) {
    console.log(err);
  }
}

consumePromise5();

/*
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(response)
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error: ", error);
  }
}
getAllUsers();
// Yeh phele run hota h, baki upar ki cmds baad me run hogi
*/

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data)=>{
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
// Yeh baad me run hota h, pehle upar ki cmds baad me run hogi