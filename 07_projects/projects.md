# Projects related to DOM

## SOLUTION CODE

### PROJECT 1

![Project 1](images/image1.png)

```javascript

const btns = document.querySelectorAll('.button');
console.log(btns);

const body = document.querySelector('body');

// btns.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     console.log(btn.id);

//     body.style.backgroundColor = btn.id;
//   });
// });

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // console.log(e);
    // console.log(e.target);
    if (e.target.id == 'grey') body.style.backgroundColor = e.target.id;
    else if (e.target.id == 'white') body.style.backgroundColor = e.target.id;
    else if (e.target.id == 'blue') body.style.backgroundColor = e.target.id;
    else if (e.target.id == 'yellow') body.style.backgroundColor = e.target.id;
    else if (e.target.id == 'purple') body.style.backgroundColor = e.target.id;
  });
});


```