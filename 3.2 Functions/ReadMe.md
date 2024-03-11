# What is a Function?

In JavaScript, a function is a reusable block of code that performs a specific task or calculates a value. Functions are defined using the function keyword, and they can be invoked (called) multiple times throughout the code.

# Why Use Functions?

- Modularity: Functions allow us to break down our code into smaller, manageable pieces. Each function can perform a specific task, making the code more modular and easier to understand.

- Reusability: Once you define a function, you can use it multiple times in your code without rewriting the same logic. This promotes code reuse and reduces redundancy.

- Readability: Functions provide a way to encapsulate functionality with a meaningful name. This improves the readability of your code by making it clear what each part does.


# What is the difference between Methods or Function?
A function is a piece of code that is called by name. It can be passed data to operate on (i.e. the parameters) and can optionally return data (the return value). All data that is passed to a function is explicitly passed.

A method is a piece of code that is called by a name that is associated with an object. In most respects it is identical to a function except for two key differences:

<a href="https://stackoverflow.com/questions/155609/whats-the-difference-between-a-method-and-a-function" target="_blank">Reference</a>

# Basic Syntax:

Here's the basic syntax for defining and invoking a function:

```
// Function definition
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Function invocation
greet("John");  // Output: Hello, John!

```

# Return Statement:

Functions can also return a value using the `return` statement.

```
// Function definition with return statement
function square(number) {
    return number * number;
}

// Function invocation
let result = square(5);
console.log(result);  // Output: 25

```

# Function Declaration vs. Function Expression:

```
    // Function Declaration
    function sayHello() {
        console.log("Hello!");
    }

    // invoke or call the function
    sayHello();



    // Function Expression
    const sayHello = function() {
        console.log("Hello!");
    };

    // invoke or call the function
    let message = sayHello();
    console.log(message); // Output: Hello!


```
