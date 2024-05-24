## PACKED vs HOLEY | JSVU | V8-debug

```javascript
const myArr=[]
// console.log(myArr)
%DebugPrint(myArr) // Error: DebugPrint is not defined
```

**Arrays are of 2 types:**
<br>
    1. Continuous
<br>
2. Holey array (iske andar holes h)

Arrays ka optmization hota h whether it is in c++, js, rust, har ek language me hota h

## Optimizations in JS
- SMI (small integer)
- Packed Element
- Double (float, string, function)

Har datatype ki alag optimisation hoti h, (different optimization for continuous and holey arrays)
<br>
***Arrays me elements hote h***

```javascript
const newarr = [1, 2, , 4, 5];
// This is an array of HOLEY_SMI_ELEMENTS

const arr = [1, 2, 3, 4, 5];
// This is an array of Packed_SMI_ELEMENTS
// BEST OPTMIZED TYPE
// TAKE only numbers

// Now insert double value
arr.push(6.08);
// Packed_DOUBLE_ELEMENTS
// Abh isse wapas packed_smi nhi bana skte even after pop the values

//! Ek baar downgrade hua fir upgrade nhi kar skte

arr.push("7");
// Packed_ELEMENTS

arr[10] = 11;
// Now it has become the holey_ELEMENTS
// not smi because isme numbers, double, string sb h
console.log(arr); // [ 1, 2, 3, 4, 5, 6.08, '7', <3 empty items>, 11 ]
console.log(arr.length); // 11
console.log(arr[9]); // undefined
console.log(arr[19]); // undefined

// Yeh undefined wale bahot hi costly operations hote h
```

## How we find the element/index in the array
### Checkings
1. **Bound check** -> ***range check***
    - 19th index ke lie bound check successfully bta deta h ki yeh out of bound h, so show undefined
    - 9th index ke lie problem jyda hoti h, because woh range ke andar h

1. **hasOwnProperty(arr, 9)**
   - 9 naam se koi property toh nhi h, basic checking

2. **hasOwnProperty(arr.prototype, 9)**
3. **hasOwnProperty(Object.prototype, 9)** 


**hasOwnProperty check pure js me most expensive check h.**
<br>
**Therefore, it is called that holes are very expensive in js.**

```javascript
const arr3=[1,2,3,4,5]
console.log(arr3[8])
console.log(arr3[2]) 
// bound check, then print it, as it is in range
```
### Optimized Thing
- ***Continuous***
  
    SMI > DOUBLE > PACKED

- ***Holey***

    H_SMI > H_DOUBLE > H_PACKED

```javascript
const arr4=new Array(3);
// got 3 holes just after initialization -> Holey_SMI_ELEMENTS

arr4[0] = '1'
// Now, downgrade to Holey_ELEMENTS
arr4[2] = '2'
arr4[3] = '3'

//! HOW TO OPTIMZE THIS ARR4
const arr5=[] // SMI 
arr5.push('1') // PACKED_ELEMENTS
arr5.push('2') // PACKED_ELEMENTS
arr5.push('3') // PACKED_ELEMENTS

// OUTPUT REMAINS SAME

const arr6=[1,2,3,4,5]
arr6.push(NaN) // PACKED_DOUBLE
arr6.push(Infinity) // PACKED_DOUBLE
// Mostly inhe dalne ka koi use nhi h, 
// pr ek baar kardia toh fir yeh packed_DOUBLE bnn gya h
```


### Recommendations given for v8, spider-monkey
**for, for-of, for-each**, jo by default de rkha h unhe use karna chahie. 
<br>
*Use these methods, instead of creating your own one.*

Because when new update of browser came, it can optmize these functions more,
<br>even your one can be optmized for some task, but these will give an overall optmized ans.
