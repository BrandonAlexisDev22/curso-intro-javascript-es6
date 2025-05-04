/*
Ejercicio: Sistema de Biblioteca

Crea una clase llamada Libro que tenga las siguientes propiedades:

titulo (string)
autor (string)
anio (número)
Y un método llamado detalles que imprima en consola:
"Título: [titulo], Autor: [autor], Año: [anio]".

Crea una clase llamada Biblioteca que tenga las siguientes propiedades:

nombre (string)
libros (array vacío inicialmente)
Y los siguientes métodos:

agregarLibro(libro) que reciba un objeto de tipo Libro y lo agregue al array libros.
mostrarLibros() que imprima en consola los detalles de todos los libros en la biblioteca.
Crea una instancia de la clase Biblioteca y agrega al menos 3 libros. Luego, muestra los libros en la consola.
*/
// {
//   class Libro {
//     constructor(titulo, autor, año) {
//       this.titulo = titulo;
//       this.autor = autor;
//       this.año = año;
//     }
//     Detalles() {
//       console.log(
//         `TITULO: ${this.titulo} - AUTOR: ${this.autor} - AÑO: ${this.año}`
//       );
//     }
//   }

//   class Biblioteca {
//     constructor(nombre, libros) {
//       this.nombre = nombre;
//       this.libros = libros;
//     }

//     agregarLibro(libro) {
//       this.libros.push(libro);
//     }

//     mostrarLibros() {
//       this.libros.forEach((libro) => libro.Detalles());
//     }
//   }

//   const biblioteca = new Biblioteca("Biblioteca Central", []);

//   const libro1 = new Libro(
//     "Cien Años de Soledad",
//     "Gabriel García Márquez",
//     1967
//   );
//   const libro2 = new Libro("1984", "George Orwell", 1949);
//   const libro3 = new Libro("El Principito", "Antoine de Saint-Exupéry", 1943);

//   biblioteca.agregarLibro(libro1);
//   biblioteca.agregarLibro(libro2);
//   biblioteca.agregarLibro(libro3);

//   biblioteca.mostrarLibros();
// }

// Implementa un sistema para gestionar estudiantes en una escuela. Debes crear una clase que represente a un estudiante, con su información personal y la lista de cursos en los que está inscrito. También debes crear una clase que represente a una escuela, capaz de matricular estudiantes y mostrar la información de todos los alumnos registrados. El sistema debe permitir agregar cursos a un estudiante y visualizar sus datos completos. Asegúrate de estructurar tu código de forma clara y reutilizable.

class Curso{
    constructor(nombre,profesor){
        this.nombre = nombre;
        this.profesor = profesor;
    }
}

class Estudiante{
    constructor(nombre,edad,año){
        this.nombre = nombre;
        this.edad = edad
        this.año = año
        this.cursos = []
    }

    mostrarInformacion(){
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Año: ${this.año}`);
        console.log("Cursos inscritos:");
        this.cursos.forEach((curso, index) => {
            console.log(`${index + 1}. ${curso.nombre} - Profesor: ${curso.profesor}`);
        });
    }

    agregarCurso(curso){
        this.cursos.push(curso)
        console.log("Estudiante agregado correctamente al curso.")
    }
}

class Escuela{
    constructor(nombre){
        this.nombre = nombre;
        this.alumnos = []
    }

    matricularEstudiante(estudiante) {
        this.alumnos.push(estudiante)
    }

    informacionEstudiantes(){
        this.alumnos.forEach(estudiante => estudiante.mostrarInformacion())
    }
}


const escuela = new Escuela("Nuevo Horizonte")
const curso1 = new Curso("Matemáticas", "Prof. García");
const curso2 = new Curso("Historia", "Prof. López");
const curso3 = new Curso("Ciencias", "Prof. Martínez");

const estudiante1 = new Estudiante("Juan Pérez", 15, 2023);
const estudiante2 = new Estudiante("María López", 16, 2023);
const estudiante3 = new Estudiante("Carlos Gómez", 14, 2023);

estudiante1.agregarCurso(curso1);
estudiante1.agregarCurso(curso2);

estudiante2.agregarCurso(curso2);
estudiante2.agregarCurso(curso3);

estudiante3.agregarCurso(curso1);
estudiante3.agregarCurso(curso3);

escuela.matricularEstudiante(estudiante1);
escuela.matricularEstudiante(estudiante2);
escuela.matricularEstudiante(estudiante3);

escuela.informacionEstudiantes();