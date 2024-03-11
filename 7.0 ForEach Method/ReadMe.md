# ForEach Method
The `forEach()` method is use to iterate or loop over the elements of an array and apply the `callback` function to each element.

Note: forEach method does not work with empty arrays.

## Syntax
```
array.forEach(callback);

array.forEach(function(element, index, arr));

array.forEach((element, index, arr)=>{ //your code goes here});
```

## Parameters of callback function
Notes: this parameters will automatically pass down to your callback function
| function()      | Description                       | Required? |
| --------------- | ----------------------------------|-----------|
| currentValues   | The value of the current element. | Required  |
| index           | The current Index                 | Optional  |
| arr             | The array of current element      | Optional  |





## Examples of displaying current elements
Example Numbers
```
let numbers = [1,2,3,4,5];

function count(value){
    console.log(value);
}

numbers.forEach(count)
```
Example Strings:
```
let str = ["Hello", "world", "John", "Doe"];


function displayString(value){
    console.log(value);
}

str.forEach(displayString);
```
Example Array of Objects
```
let persons = [
    { 
        fname : "John",
        lname : "Doe"
    },
    { 
        fname : "Jane",
        lname : "Doe"
    },
]

function displayNames(person){
    console.log(person.fname, person.lname);
}
persons.forEach(displayNames);
```
Example Arrow Functions
```
let numbers = [1,2,3,4,5];
numbers.forEach((values) => console.log(values));
```

# Example using all the callback parameters
Let say you want to double the number of the elements in array.
```
let numbers = [1,2,3,4,5];

function double(value, index, arr){
    arr[index] = value * 2;
}

numbers.forEach(double);

console.log(numbers);
```
Implementation with arrow functions
```
let numbers = [1,2,3,4,5];

numbers.forEach((value, index, arr) => {
    arr[index] = value * 2;
});

console.log(numbers);
```

# Reference
<a href="https://stackoverflow.com/questions/43031988/javascript-efficiency-for-vs-foreach">
Javascript efficiency: 'for' vs 'forEach'
</a>

<a href="https://blog.bitsrc.io/finding-the-fastest-loop-type-in-javascript-38af16fe7b4f">What is the Fastest Loop Type in JavaScript?</a>
