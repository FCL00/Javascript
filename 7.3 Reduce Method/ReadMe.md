# Reduce Method
`.reduce()` reduce the elements of an array into a single value. The `reduce()` method returns a single value: the function's accumulated result. 
`reduce()` doesn't work when the array is empty. `reduce()` method does not modify the orignal array.

```
array.reduce(callback, initialValue);

array.reduce(function(accumulator, currentValue, currentIndex, arr){}, initialValue);

array.reduce((accumulator, currentValue, currentIndex, arr)=>{}, initialValue);
```

## Parameters of reduce method
| Parameters         | Description                                                        | Required? |
| ------------------ | -------------------------------------------------------------------|-----------|
| `callback()`       | A function that needs to run on each array element                 | Required  |
| `accumulator`      | The initialValue, or the previously returned value of the function.| Required  |
| `currentValue`     | The value of the current element.                                  | Required  |
| `currentIndex`     | The index of the current element.                                  | Optional  |
| `index`            | The current Index                                                  | Optional  |
| `arr`              | The array of current element                                       | Optional  |
| `initialValue`     | A value to be passed to the function as the initial value          | Optional  |

Notes: this parameters will automatically pass down to your callback function

## Examples usage of reduce method
```
const prices = [100, 40, 30, 20, 5, 2, 250];

function sum (accumulator, currentValue){
    return accumulator + currentValue;
}

const total = prices.reduce(sum, 0);

console.log(`total : $${total}`);
```
or
```
const prices = [100, 40, 30, 20, 5, 2, 250];

function sum (prev, next){
    return prev + next;
}

const total = prices.reduce(sum, 0);

console.log(`total : $${total}`);
```