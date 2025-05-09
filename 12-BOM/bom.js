// El objeto BOM (Browser Object Model) permite interactuar con el navegador.

// Objeto window
console.log('Altura interna de la ventana:', window.innerHeight);
console.log('Anchura interna de la ventana:', window.innerWidth);

// Objeto location
console.log('URL actual:', window.location.href);
// Cambiar la URL (descomentarlo para usarlo)
// window.location.href = 'https://www.google.com';

// Objeto navigator
console.log('Información del navegador:', window.navigator.userAgent);
console.log('Idioma del navegador:', window.navigator.language);

// Objeto history
console.log('Historial de navegación disponible:', window.history.length);
// Navegar hacia atrás (descomentarlo para usarlo)
// window.history.back();

// Objeto screen
console.log('Resolución de la pantalla:', window.screen.width + 'x' + window.screen.height);