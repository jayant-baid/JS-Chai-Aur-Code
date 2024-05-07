// switch (key) {
//     case value:
//         break;
//     default:
//         break;
// }

const month = "mar";

switch (month) {
  case "jan":
    console.log("January");
    break;
  case "feb":
    console.log("February");
    break;
  case "mar":
    console.log("March");
    break;
  case "apr":
    console.log("April");
    break;

  default:
    console.log("default case match");
    break; // we can ignore this, because iske niche kuch bhi nhi h
}

// If we ignore break in cases, then it will print it the bottom till it doesn't get break, but default will not be console.log, even if it's top one have a break or not