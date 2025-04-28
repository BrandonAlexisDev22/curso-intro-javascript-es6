// Arithmetic Operators
let a = 10, b = 5;
console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus
console.log(a ** b); // Exponentiation
console.log(++a); // Increment
console.log(--b); // Decrement

// Assignment Operators
let x = 10;
x += 5; // x = x + 5
x -= 5; // x = x - 5
x *= 5; // x = x * 5
x /= 5; // x = x / 5
x %= 5; // x = x % 5
x **= 2; // x = x ** 2

// Comparison Operators
console.log(a == b); // Equal to
console.log(a === b); // Strict equal to
console.log(a != b); // Not equal to
console.log(a !== b); // Strict not equal to
console.log(a > b); // Greater than
console.log(a < b); // Less than
console.log(a >= b); // Greater than or equal to
console.log(a <= b); // Less than or equal to

// Logical Operators
console.log(a > 5 && b < 10); // Logical AND
console.log(a > 5 || b > 10); // Logical OR
console.log(!(a > 5)); // Logical NOT

// Bitwise Operators
console.log(a & b); // AND
console.log(a | b); // OR
console.log(a ^ b); // XOR
console.log(~a); // NOT
console.log(a << 1); // Left shift
console.log(a >> 1); // Right shift
console.log(a >>> 1); // Zero-fill right shift

// String Operators
let str1 = "Hello", str2 = "World";
console.log(str1 + " " + str2); // Concatenation

// Conditional (Ternary) Operator
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote);

// Type Operators
console.log(typeof a); // Type of
console.log(a instanceof Number); // Instance of

// Nullish Coalescing Operator
let value = null;
console.log(value ?? "Default Value"); // Returns "Default Value"

// Optional Chaining Operator
let obj = { name: "John" };
console.log(obj?.name); // John
console.log(obj?.address?.city); // undefined