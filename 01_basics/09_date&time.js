let myDate = new Date();
console.log(myDate); //2024-01-19T08:45:02.552Z
console.log(typeof myDate); //clear

console.log(myDate.toString()); //Fri Jan 19 2024 14:15:02 GMT+0530 (India Standard Time)

console.log(myDate.toISOString()); //2024-01-19T08:45:02.552Z

console.log(myDate.toUTCString()); //Fri, 19 Jan 2024 08:45:02 GMT

console.log(myDate.toDateString()); //Fri Jan 19 2024

console.log(myDate.toJSON()); //2024-01-19T08:45:02.552Z

console.log(myDate.toLocaleString()); //19/1/2024, 2:17:06 pm

console.log(myDate.toLocaleDateString()); //19/1/2024

console.log(myDate.toTimeString()); //14:17:06 GMT+0530 (India Standard Time)

//! Only Date (YYYY,MM,DD)
let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023

//! Date + Time(hr, min)  (YYYY,MM,DD, hh,mm)
let myCreatedDate2 = new Date(2023, 0, 23, 5, 22);
console.log(myCreatedDate2.toLocaleString()); //23/1/2023, 5:22:00 am

//! Date (YYYY-MM-DD)
let myCreatedDate3 = new Date("2023-01-13");
console.log(myCreatedDate3.toLocaleString()); //13/1/2023, 5:30:00 am

//! Date (MM/DD/YYYY)
let myCreatedDate4 = new Date("01-13-2023");
console.log(myCreatedDate4.toLocaleString()); //13/1/2023, 12:00:00 am

console.log(Date.now()); //1705654564426 (Date in milliseconds)
console.log(myCreatedDate.getTime()); //1674412200000 milliseconds

//! Wants seconds
console.log(Math.floor(Date.now() / 1000)); //1705654749 seconds
//* We can use % also

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()); //Jan -> 0
console.log(newDate.getMonth() + 1); //Jan -> 1
console.log(newDate.getDay()); //Sunday - Saturday : 0 - 6

//! If you want more Customizations
let date1=newDate.toLocaleString('default', {
    dateStyle:"full",
    timeStyle:"short",
    hour12:false
})
console.log(date1) //Friday, 19 January, 2024 at 14:40