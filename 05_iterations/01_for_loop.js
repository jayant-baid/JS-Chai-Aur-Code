//! FOR LOOP

for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 5) {
    console.log(`5 is the Best Number`);
  }
  console.log(element)
}

for (let i = 1; i <= 10; i++) {
  // console.log(`Outer Loop Value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    //console.log(`Inner Loop Value: ${j} and i = ${i}`);
    console.log(i + ' * ' + j + ' = ' + i*j); // Print table of 1 to 10
  }
}

const myArray = ["flash", "batman", "superman"];
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element)
}

//! Break & Continue
for (let i = 1; i <= 20; i++) {
  if (i === 5) {
    console.log(`5 is Detected`);
    break;
  }
  console.log(`Value of i is ${i}`);
}

for (let i = 1; i <= 20; i++) {
  if (i === 5) {
    console.log(`5 is Detected`);
    continue;
  }
  console.log(`Value of i is ${i}`);
}
