// Map Method Exercise Solution
 
// 1. Create an array of numbers.
let numbers = [1, 2, 3, 4, 5];
// use the map() to triple the value of each element in the number array.
function triple(value){
    return value * 3;
}

const newArray = numbers.map(triple);
// log the result
console.log(newArray);

// 2. Create an array of strings.
let str = ["apple", "banana", "orange"];
// use the map() to transform each string element into UPPERCASE!. 
const newStr = str.map((element) => element.toUpperCase());
// log the result
console.log(newStr);

// 3. create an array of objects that represents people name and age.
let people = [ 
    {name: "Bob", age: 30}, 
    {name: "Alice", age: 25}, 
];

// then use the map() to display the name and age of a person
const formattedStr = people.map((value) => `this is ${value.name} and he/she is ${value.age}`);