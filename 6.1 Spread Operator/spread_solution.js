// Spread Operator Exercise Solution

// 1. Create an array of numbers.
let arr = [1,2,3];
// create new emtpy array 
let arr2 = [...arr, 4, 5, 6];
//  Use the spread operator to the empty array and include some additional numbers.
console.log(arr2);
//  log the result


// 2. Create two object then merge them together
// log the result

let person = {
    fname: "fernando",
    lname: "lagaghit"
}


let address = {
    street: "Sesame Street",
    city: "Taguig City"
}

let information = {...person, ...address};

// 3. Create a function that takes 3 parameters and return their sum
function sum(x, y, z){
    return x + y + z;
}
//create an array of numbers
let numbers = [1,2,3];
// then use spread operator to pass the array elements as arguments to that function
// log the result
console.log(sum(...numbers));