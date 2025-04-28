// JavaScript Data Types

// 1. Primitive Data Types
let stringType = "Hello, World!"; // String
let numberType = 42; // Number
let bigIntType = 1234567890123456789012345678901234567890n; // BigInt
let booleanType = true; // Boolean
let undefinedType; // Undefined
let nullType = null; // Null
let symbolType = Symbol("unique"); // Symbol

// 2. Non-Primitive (Reference) Data Types
let objectType = { name: "John", age: 30 }; // Object
let arrayType = [1, 2, 3, 4, 5]; // Array (a type of object)
let functionType = function () { return "I am a function"; }; // Function (a type of object)

// Example usage
console.log(typeof stringType); // "string"
console.log(typeof numberType); // "number"
console.log(typeof bigIntType); // "bigint"
console.log(typeof booleanType); // "boolean"
console.log(typeof undefinedType); // "undefined"
console.log(typeof nullType); // "object" (special case)
console.log(typeof symbolType); // "symbol"
console.log(typeof objectType); // "object"
console.log(typeof arrayType); // "object"
console.log(typeof functionType); // "function"
