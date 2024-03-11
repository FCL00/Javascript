# Filter Method

The `filter()` method is useful when you want to create a new array containing only the elements that satisfy a specific condition. 

it doesnt modify the original array but instead return a new array.

## Syntax
```
array.filter(callback);

array.filter(function(currentValue, index, arr));

array.filter((currentValue, index, arr) => {});
```

## Parameters of filter Method
| Parameters         | Description                                        | Required? |
| ------------------ | ---------------------------------------------------|-----------|
| `callback() `      | A function that needs to run on each array element | Required  |
| `currentValue`     | The value of the current element.                  | Required  |
| `index `           | The current Index                                  | Optional  |
| `arr `             | The array of current element                       | Optional  |

Notes: this parameters will automatically pass down to your callback function


## Examples of filter() method
in this example i am going to filter out the odd number
```
let numbers = [1,2,3,4,5,6,7,8,9,10];

function isEven(value){
    return value % 2 === 0;
}

let evenNum = numbers.filter(isEven);
```
in this example i am going to filter out the short words.
```
let str = ["Apple", "Banana", "Kiwi", "Pear", "Orange"]

let newStr = str.filter((element) => element.length >= 5 );

console.log(newStr);
```
In this example, the filter() method is used to create a new array expensiveProducts containing only the products with a price greater than 1000.
```
let products = [
    { id: 1, name: "iPhone", price: 1000 },
    { id: 2, name: "iPad", price: 800 },
    { id: 3, name: "MacBook", price: 2000 },
    { id: 4, name: "Apple Watch", price: 400 }
];

let expensiveProducts = products.filter(product => product.price > 1000);

console.log(expensiveProducts);
```