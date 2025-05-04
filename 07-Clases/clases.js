// Ejemplo de una clase simple
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Crear un objeto de la clase Persona
const persona1 = new Persona('Juan', 30);
persona1.saludar(); // Salida: Hola, mi nombre es Juan y tengo 30 años.

// Ejemplo de herencia
class Estudiante extends Persona {
    constructor(nombre, edad, grado) {
        super(nombre, edad);
        this.grado = grado;
    }

    estudiar() {
        console.log(`${this.nombre} está estudiando en el grado ${this.grado}.`);
    }
}

// Crear un objeto de la clase Estudiante
const estudiante1 = new Estudiante('Ana', 20, 'Universidad');
estudiante1.saludar(); // Salida: Hola, mi nombre es Ana y tengo 20 años.
estudiante1.estudiar(); // Salida: Ana está estudiando en el grado Universidad.