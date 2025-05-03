// Example of Arrays and Common Methods in JavaScript

// Creating an array
const fruits = ['apple', 'banana', 'cherry', 'date'];

// Accessing elements
console.log(fruits[0]); // Output: apple
console.log(fruits[2]); // Output: cherry

// Adding elements
fruits.push('elderberry'); // Adds to the end
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']

fruits.unshift('fig'); // Adds to the beginning
console.log(fruits); // Output: ['fig', 'apple', 'banana', 'cherry', 'date', 'elderberry']

// Removing elements
fruits.pop(); // Removes the last element
console.log(fruits); // Output: ['fig', 'apple', 'banana', 'cherry', 'date']

fruits.shift(); // Removes the first element
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date']

// Finding elements
const index = fruits.indexOf('cherry');
console.log(index); // Output: 2

// Checking if an element exists
const hasBanana = fruits.includes('banana');
console.log(hasBanana); // Output: true

// Slicing an array
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ['banana', 'cherry']

// Splicing an array
fruits.splice(1, 1, 'blueberry'); // Replaces 'banana' with 'blueberry'
console.log(fruits); // Output: ['apple', 'blueberry', 'cherry', 'date']

// Iterating over an array
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// Mapping an array
const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits); // Output: ['APPLE', 'BLUEBERRY', 'CHERRY', 'DATE']

// Filtering an array
const filteredFruits = fruits.filter(fruit => fruit.startsWith('b'));
console.log(filteredFruits); // Output: ['blueberry']

// Reducing an array
const concatenatedFruits = fruits.reduce((acc, fruit) => acc + ', ' + fruit);
console.log(concatenatedFruits); // Output: apple, blueberry, cherry, date

// Sorting an array
fruits.sort();
console.log(fruits); // Output: ['apple', 'blueberry', 'cherry', 'date']

// Reversing an array
fruits.reverse();
console.log(fruits); // Output: ['date', 'cherry', 'blueberry', 'apple']