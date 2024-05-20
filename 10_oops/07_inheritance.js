class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`New course is added by ${this.username}`);
  }
}
const jb = new Teacher("Jayant", "jaynt@google.com", "1234");
jb.addCourse();
jb.logMe();

const j2User = new User("J2 plays");
j2User.logMe();
console.log(j2User.username);

console.log(jb === j2User) // false
console.log(jb === Teacher) // false

console.log(jb instanceof Teacher)// true
console.log(j2User instanceof User) // true