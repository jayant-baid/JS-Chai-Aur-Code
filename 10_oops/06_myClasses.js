// Come after ES6
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}abc`;
  }
  changeUserName() {
    return `${this.username.toUpperCase()}`;
  }
}
const jb = new User("jayant", "jayant@google.com", "123");
console.log(jb.encryptPassword());
console.log(jb.changeUserName());

//! Behind the Scene

function User2(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User2.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
User2.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new User2("tea", "tea@gmail.com", "321");

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
