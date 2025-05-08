// Example 1: Selecting an element by ID and changing its content
const element = document.getElementById('example');
console.log(element);

// Example 1.1: Selecting an element by class name
const elementsByClass = document.getElementsByClassName('example-class');
console.log(elementsByClass);

// Example 1.2: Selecting an element by tag name
const elementsByTag = document.getElementsByTagName('div');
console.log(elementsByTag);

// Example 1.3: Selecting an element using querySelector
const queryElement = document.querySelector('.example-class');
console.log(queryElement);

// Example 1.4: Selecting multiple elements using querySelectorAll
const queryAllElements = document.querySelectorAll('.example-class');
console.log(queryAllElements);
document.getElementById('example').textContent = 'Hello, DOM!';

// Example 2: Adding a new element to the DOM
const newElement = document.createElement('p');
newElement.textContent = 'This is a new paragraph.';
document.body.appendChild(newElement);

// Example 3: Changing the style of an element
const header = document.querySelector('h1');
header.style.color = 'blue';
header.style.fontSize = '2em';

// Example 4: Adding an event listener to a button

// Example 4.1: Selecting an element by attribute
const elementByAttribute = document.querySelector('[data-example="value"]');
console.log(elementByAttribute);

// Example 4.2: Selecting the first child of a parent
const firstChild = document.querySelector('.parent > :first-child');
console.log(firstChild);

// Example 4.3: Selecting the last child of a parent
const lastChild = document.querySelector('.parent > :last-child');
console.log(lastChild);

// Example 4.4: Selecting elements by pseudo-class
const nthChild = document.querySelector('.parent > :nth-child(2)');
console.log(nthChild);
const button = document.querySelector('button');
button.addEventListener('click', () => {
    alert('Button clicked!');
});

// Example 5: Removing an element from the DOM
const elementToRemove = document.querySelector('.remove-me');
if (elementToRemove) {
    elementToRemove.remove();
}

