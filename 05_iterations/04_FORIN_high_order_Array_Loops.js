const myObj = {
  js: "JavaScript",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift by Apple",
};

for (const key in myObj) {
  console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

// For array, key is the index
for (const key in programming) {
  console.log(programming[key]);
}

// Maps are not iterable
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

// Kuch nhi aaega o/p
for (const key in map) {
  console.log(key);
}
