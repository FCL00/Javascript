# Map() Method

The `map()` accepts a callback and applies that function to each element of the array, then return a new array. 

Notes: 
You cannot use `map()` when your array is empty. 
Additionally `map()` does not change your orginal array.

## Syntax
```
array.map(callback);

array.map(function(currentValue, index, arr){ //code goes here });

array.map((currentValue, index, arr)=>{ //code goes here});
```


## Parameters of Map Method
| Parameters         | Description                                        | Required? |
| ------------------ | ---------------------------------------------------|-----------|
| `callback() `      | A function that needs to run on each array element | Required  |
| `currentValue`     | The value of the current element.                  | Required  |
| `index `           | The current Index                                  | Optional  |
| `arr `             | The array of current element                       | Optional  |

Notes: this parameters will automatically pass down to your callback function

## Examples of map() method
In this example i am just trying to double the value of the elements of the array. 
then after that i will return the value.

Example for numbers
```
const numbers = [1,2,3,4,5];

function double(value){
    return value * 2;
}

const newArray = numbers.map(double);

console.log(newArray);
```
Here are some examples for Strings
```
const str = ["Apple", "Banana", "PineApple"];

function display(value){
    return `This is an ${value}`;
}

const newArray = str.map(display);

console.log(newArray);
```
Here are some examples for array of objects
```
const cars = [
    { 
        brand : "toyota",
        color : "white",
        type  : "collora"
    },
    { 
        brand : "nissan",
        color : "blue",
        type  : "GT-R"
    },
];

function displayProperties(val){
    return `Car Brand: ${val.brand} Color: ${val.color} Type: ${val.type}`;
}

const newArray = cars.map(displayProperties);

console.log(newArray);
```
Example how to use arrow function
```
const persons = ["Jack", "Daniels", "San", "Miguel"];

const newArray = persons.map((person) => `this is ${person}`);

console.log(newArray);
```


## References:
<a href="https://medium.com/@YAKStack/react-map-vs-foreach-31821dcb71a6#:~:text=Both%20map()%20and%20forEach()%20are%20useful%20methods%20for,you%20should%20use%20map()%20." target="_blank">Map() vs forEach()</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank">Array.prototype.map()</a>