// Stack -> Primitive datatypes ke lie
// Heap -> Non-Primitive datatypes ke lie

let name = "Jayant Baid"; //goes in stack
// iski copy banti h
let anotherName = name;
anotherName = "J2 ke factz";
console.log(anotherName, ":", name);
// name and anotherName will give the diff values

let user1 = {
  email: "abc@google.com",
  upi: "abdsw@upi",
};
// user1 is in stack but the object is in heap -> so reference milega
let user2 = user1;
user2.upi = "acs@paytm";
console.log(user2, ":", user1);
// Both will get the same reference
// user and user2 will give the same updated result
