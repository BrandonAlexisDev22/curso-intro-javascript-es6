// Example of control flow structures in JavaScript

// Conditional Statement
const age = 18;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// Switch Statement
const day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the work week.");
        break;
    case "Friday":
        console.log("End of the work week.");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!");
        break;
    default:
        console.log("It's a regular day.");
}

// For Loop
for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i}`);
}

// While Loop
let count = 0;
while (count < 3) {
    console.log(`Count is ${count}`);
    count++;
}

// Do-While Loop
let num = 0;
do {
    console.log(`Number is ${num}`);
    num++;
} while (num < 3);

// Try-Catch for Error Handling
try {
    throw new Error("An example error");
} catch (error) {
    console.error("Caught an error:", error.message);
}