class User {
  // static
  static cnt = 1;
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username is ${this.username}`);
  }

  // Iss method ka access har uss object ko nhi dena chahte jo iss class se intantiate hua h
  static createId() {
    return `124${Math.floor(Math.random() * 1000)}`;
  }
  // Use Static Func inside another func
  getID() {
    console.log(this.constructor.createId());
  }
}

const jb = new User("jayant");
// console.log(jb.createId()); // jb.createId is not a function
jb.getID();

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}
const j2 = new Teacher("J2 Plays", "jaynt@google.com", "1234");
j2.logMe();
// j2.createId(); // j2.createId is not a function

//! To access static, we have to use class
console.log(User.createId(jb));

//! Updating static variable
User.cnt++;

const jbTemp = new User("jayant");
console.log(jbTemp.cnt); // undefined
console.log(User.cnt); // 2
