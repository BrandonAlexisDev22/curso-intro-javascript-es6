// Métodos comunes y utilizados del DOM

// 1. getElementById
// Obtiene un elemento del DOM por su atributo id.
const element = document.getElementById('miId');
console.log(element);

// 2. getElementsByClassName
// Devuelve una colección de elementos que tienen una clase específica.
const elements = document.getElementsByClassName('miClase');
console.log(elements);

// 3. getElementsByTagName
// Devuelve una colección de elementos con un nombre de etiqueta específico.
const tags = document.getElementsByTagName('div');
console.log(tags);

// 4. querySelector
// Devuelve el primer elemento que coincide con un selector CSS.
const firstElement = document.querySelector('.miClase');
console.log(firstElement);

// 5. querySelectorAll
// Devuelve todos los elementos que coinciden con un selector CSS.
const allElements = document.querySelectorAll('.miClase');
console.log(allElements);

// 6. createElement
// Crea un nuevo elemento HTML.
const newElement = document.createElement('div');
newElement.textContent = 'Hola Mundo';
document.body.appendChild(newElement);

// 7. appendChild
// Agrega un nodo hijo al final de la lista de hijos de un elemento.
const parent = document.getElementById('miId');
const child = document.createElement('p');
child.textContent = 'Soy un párrafo';
parent.appendChild(child);

// 8. removeChild
// Elimina un nodo hijo de un elemento.
const childToRemove = document.getElementById('hijoId');
parent.removeChild(childToRemove);

// 9. replaceChild
// Reemplaza un nodo hijo por otro.
const newChild = document.createElement('span');
parent.replaceChild(newChild, childToRemove);

// 10. addEventListener
// Agrega un evento a un elemento.
const button = document.getElementById('miBoton');
button.addEventListener('click', () => {
  console.log('Botón clickeado');
});

// 11. innerHTML
// Permite obtener o establecer el contenido HTML de un elemento.
const container = document.getElementById('miId');
container.innerHTML = '<p>Nuevo contenido</p>';

// 12. textContent
// Permite obtener o establecer el contenido de texto de un elemento.
container.textContent = 'Nuevo texto';

// 13. setAttribute y getAttribute
// Permiten establecer o obtener atributos de un elemento.
container.setAttribute('class', 'nuevaClase');
console.log(container.getAttribute('class'));

// 14. removeAttribute
// Elimina un atributo de un elemento.
container.removeAttribute('class');

// 15. classList
// Permite manipular las clases de un elemento.
container.classList.add('nuevaClase');
container.classList.remove('otraClase');
container.classList.toggle('toggleClase');
console.log(container.classList.contains('nuevaClase'));