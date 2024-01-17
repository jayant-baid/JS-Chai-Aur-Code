const accountId = 14454;
let accountEmail="jb@gmail.com";
var accountPassword="12333";
accountcity="Delhi"; //! Not a good practice
let accountState;

// accountId=2; // Not allowed

accountEmail="jayant@gmail.com";
accountPassword="1wjdssrr";
accountcity="Rajasthan";

/*
Prefer not to use var
because of the issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountcity, accountState]);