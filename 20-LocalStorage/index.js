// Ejemplo práctico de uso de LocalStorage

// Guardar datos en LocalStorage
localStorage.setItem('usuario', 'Juan');
localStorage.setItem('tema', 'oscuro');

// Recuperar datos de LocalStorage
const usuario = localStorage.getItem('usuario');
const tema = localStorage.getItem('tema');
console.log(`Usuario: ${usuario}, Tema: ${tema}`);

// Eliminar un dato específico
localStorage.removeItem('tema');


