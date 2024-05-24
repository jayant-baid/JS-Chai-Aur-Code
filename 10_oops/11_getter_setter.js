class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  // jb hum koi bhi prop dete h toh uske corresponding getter setter bnn jate h automatically
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    return `${this._password.toUpperCase()}jayant`;
  }
  // Cannot set property password of #<User> which has only a getter
  //! Agar getter likh rhe ho toh setter bhi likhna padega

  set password(value) {
    this._password = value;
  }
  /*  this.password=value

    RangeError: Maximum call stack size exceeded

    constructor bhi set kar rha h, aur setter bhi, toh dono me race start ho jati h ki me set karunga, nhi woh set karega, ... usse problem ho jati h
    ! so now how to set,
    * password set karte waqt ek new property hi bana lijie, kyoki jo constructor me set ho rhi h, woh bhi issi se hi set ho rhi h, 
    ? So create a new propert by writing _ in front of it and use this in get, set
    */
}
const jayant = new User("jayant@yt.com", "abc");
console.log(jayant.password); // ABCjayant
// Access password kar rhe h, and we get results of _password

//! Jb bhi get, set use karenge toh naam same hi rhega of the prop 

console.log(jayant) // User { _email: 'jayant@yt.com', _password: 'abc' }
console.log(jayant.email)