//! Singleton Object
// const tinderUser=new Object();
// const tinderUser= Object.create({});

//! Object Literal
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "JB";
tinderUser.isLogin = false;
// console.log(tinderUser);

const regularUser = {
  email: "jb@gmail.com",
  fullName: {
    firstName: "Jayant",
    lastName: "Baid",
    userNickName: {
      firstName: "J2",
      lastName: "Plays",
    },
  },
};
console.log(regularUser);
console.log(regularUser.fullName);
console.log(regularUser?.fullName?.userNickName?.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3={obj1, obj2}; //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } } -> ERROR, Problem

// const obj= Object.assign(obj1, obj2);
//? Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object
// console.log(obj)
// console.log(obj1) //? changes the obj1 which we don't want to overwrite

//* So,
//!                     target, sources
const newobj = Object.assign({}, obj1, obj2);
console.log(newobj);
console.log(obj1);

//* BEST PRACTICE
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

const users = [
  {
    id: 1,
    email: "jb@gmail.com",
  },
  {
    id: 2,
    email: "jb1@gmail.com",
  },
  {
    id: 3,
    email: "jb2@gmail.com",
  },
];

console.log(users[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // got array of tinderUser keys
console.log(Object.values(tinderUser)); //got array of tinderUser values
console.log(Object.entries(tinderUser)); // got array of array of key value pairs
// [ [ 'id', '123abc' ], [ 'name', 'JB' ], [ 'isLogin', false ] ]

console.log(tinderUser.hasOwnProperty("name")); //true
console.log(tinderUser.hasOwnProperty("fullname")); //false

//! OBJECT DESTRUCTURING
const course = {
  courseName: "JS in Hindi",
  price: 999,
  courseInstuctor: "Jayant",
};
console.log(course.courseInstuctor);

const { courseInstuctor, price } = course;
//                  key: name
const { courseInstuctor: instructor } = course;

console.log(courseInstuctor, price); // Jayant 999
console.log(instructor); // Jayant

//! JSON Talk
/*
{
    "key": values
} 

[
    {},
    {},
    {}
]
*/