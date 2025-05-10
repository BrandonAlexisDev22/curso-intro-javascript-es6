// Simulating an asynchronous operation
async function sayHello() {
    return "Hello, world!";
}

// Async function to call the operation
async function greet() {
    const message = await sayHello(); // Wait for the result
    console.log(message);
}

// Call the async function
greet();
