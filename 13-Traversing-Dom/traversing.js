// Example of DOM Traversal Techniques

// Parent Node Traversal
const child = document.querySelector('.child');
console.log('Parent Node:', child.parentNode);

// Child Node Traversal
const parent = document.querySelector('.parent');
console.log('Children:', parent.children);
console.log('Child Nodes:', parent.childNodes);

// Sibling Traversal
const item = document.querySelector('.item');
console.log('Next Element Sibling:', item.nextElementSibling);
console.log('Previous Element Sibling:', item.previousElementSibling);

// First and Last Child
console.log('First Element Child:', parent.firstElementChild);
console.log('Last Element Child:', parent.lastElementChild);

// Closest Ancestor
console.log('Closest Ancestor with class .ancestor:', child.closest('.ancestor-class'));

// Querying Specific Nodes
const items = document.querySelectorAll('.item');
items.forEach((item, index) => console.log(`Item ${index + 1}:`, item));