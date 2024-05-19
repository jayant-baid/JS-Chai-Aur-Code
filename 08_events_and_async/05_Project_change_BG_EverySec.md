## Task: Change the Background color every second

![alt text](images/image-1.png)

### Code:
```javascript
// Generate a random color

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

console.log(randomColor());

let intervalId;

const startChangingColor = function () {
  // if is used for best practises: to check before performing
  if (!intervalId) {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  // flush out intervalID
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
```
