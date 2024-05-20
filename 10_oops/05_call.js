function setUserName(username) {
  // Do complex DB calls
  this.username = username;
  console.log("Called");
}

function createUser(username, email, password) {
  // setUserName(username); // call toh ho rha h pr kaam nhi kar rha h
  //* call se explicitly call kar rhe h
  setUserName.call(this, username); // ref hold karna h
  this.email = email;
  this.password = password;
}

const jb = new createUser("jayant", "jayant@google.com", "123");
console.log(jb); // createUser { email: 'jayant@google.com', password: '123' }
// Name set hi nhi hua

//* Afer using call func: o/p:
/*
  createUser {
  username: 'jayant',
  email: 'jayant@google.com',
  password: '123'
}
*/

//! CALL
/*
jb hum direct setusername(username) kar rhe h tb woh func call hota h, and 
this.username ki value update karta h but fir woh khtm ho jata h, and goes to 
dead, so uski set ki hui value bhi khtm, that's we use call jo uska reference 
deta h 

Directly call(username) se bhi kuch nhi hoga, hume this send karna hoga taki usse 
context bta ske, and setUserName func will now use "this" sent by us 
*/
