// Example of string and string manipulation in JavaScript

// Declaring strings
const singleQuoteString = 'Hello';
const doubleQuoteString = "World";
const templateLiteralString = `${singleQuoteString}, ${doubleQuoteString}!`;

// String concatenation
const concatenatedString = singleQuoteString + ' ' + doubleQuoteString;

// String length
console.log(`Length of '${singleQuoteString}':`, singleQuoteString.length);

// Accessing characters
console.log(`First character of '${doubleQuoteString}':`, doubleQuoteString[0]);

// Changing case
console.log('Uppercase:', singleQuoteString.toUpperCase());
console.log('Lowercase:', doubleQuoteString.toLowerCase());

// Substring and slicing
console.log('Substring (0, 3):', templateLiteralString.substring(0, 3));
console.log('Slice (-6):', templateLiteralString.slice(-6));

// Splitting and joining
const words = templateLiteralString.split(' ');
console.log('Split into words:', words);
console.log('Join words with "-":', words.join('-'));

// Trimming whitespace
const paddedString = '   JavaScript   ';
console.log('Trimmed string:', paddedString.trim());

// Replacing content
const replacedString = templateLiteralString.replace('World', 'ES6');
console.log('Replaced string:', replacedString);

// Checking for substrings
console.log('Includes "Hello":', templateLiteralString.includes('Hello'));
console.log('Starts with "Hello":', templateLiteralString.startsWith('Hello'));
console.log('Ends with "!":', templateLiteralString.endsWith('!'));