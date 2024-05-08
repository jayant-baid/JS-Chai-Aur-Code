const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach( function (val){
//     console.log(val);
// } )

coding.forEach((val) => {
  console.log(val);
});

function printMe(item) {
  console.log(item);
}

// When function is declared outside, we just have to give the reference of that in FOR_EACH Loop
coding.forEach(printMe);

// value, index, complete arr
coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

// Ex: [{}, {}, {}]
const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
