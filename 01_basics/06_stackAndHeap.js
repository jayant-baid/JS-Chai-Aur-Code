// Stack -> Primitive datatypes ke lie
// Heap -> Non-Primitive datatypes ke lie

let name = "Jayant Baid"; //goes in stack
// iski copy banti h
let anotherName = name;
anotherName = "J2 ke factz";
console.log(anotherName, ":", name);

let user = {
  email: "abc@google.com",
  upi: "abdsw@upi",
};
// user is in stack but the object is in heap -> so reference milega
let user2 = user;
user2.upi = "acs@paytm";
console.log(user2, ":", user);
