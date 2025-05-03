// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function Expression
const add = function(a, b) {
    return a + b;
};

// Arrow Function
const multiply = (a, b) => a * b;

// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("This is an IIFE!");
})();

// Higher-Order Function
const applyOperation = (a, b, operation) => operation(a, b);

// Callback Example
const subtract = (a, b) => a - b;
console.log(applyOperation(10, 5, subtract));

// Default Parameters
function sayHello(name = "Guest") {
    return `Hello, ${name}!`;
}

// Rest Parameters
function sumAll(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Anonymous Function
setTimeout(function() {
    console.log("This runs after 1 second");
}, 1000);

// Generator Function
function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
}

// Async Function
const fetchData = async () => {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};