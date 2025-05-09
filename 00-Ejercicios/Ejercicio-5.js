// 🧠 Proyecto: Sistema de Gestión de Inventarios
// 🎯 Objetivo general:
// Crear un sistema para gestionar el inventario de una tienda, utilizando clases en JavaScript. La aplicación debe permitir agregar productos al inventario, actualizar la cantidad de un producto, eliminar productos, y consultar la existencia de un producto en el inventario.

// 📋 Requisitos funcionales:
// Clase Producto:

// Cada producto debe tener un nombre, precio y cantidad disponible.

// Métodos de la clase Producto:

// actualizarCantidad(cantidad): Actualiza la cantidad de un producto.

// disponibilidad(): Devuelve un mensaje indicando si el producto está disponible o agotado.

// Clase Inventario:

// El inventario debe almacenar los productos y permitir:

// agregarProducto(producto): Añadir un nuevo producto al inventario.

// eliminarProducto(nombre): Eliminar un producto del inventario usando su nombre.

// buscarProducto(nombre): Buscar un producto por su nombre y mostrar su información (nombre, precio, cantidad).

// listarInventario(): Listar todos los productos del inventario con su nombre, precio y cantidad disponible.

// Funcionalidades adicionales:

// El inventario no debe permitir agregar un producto con el mismo nombre (debe ser único).

// Si un producto no está en el inventario, se debe mostrar un mensaje indicando que no existe.

// 🛠️ Requisitos técnicos:
// Utilizar clases para los productos e inventario.

// Implementar métodos en las clases para manipular los datos de acuerdo con los requisitos.

// Usar métodos de búsqueda, condicionales, y bucles para la gestión de los productos.

// Validar que las entradas sean correctas (por ejemplo, que el precio sea un número positivo y la cantidad sea un número entero).

class Producto {
  constructor(nombre, precio, cantidad) {
    if (typeof nombre !== "string" || nombre.trim() === "") {
      throw new Error("El nombre del producto debe ser un string no vacío.");
    }
    if (typeof precio !== "number" || precio <= 0) {
      throw new Error("El precio debe ser un número positivo.");
    }
    if (!Number.isInteger(cantidad) || cantidad < 0) {
      throw new Error("La cantidad debe ser un número entero no negativo.");
    }

    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  actualizarCantidad(cantidad) {
    if (!Number.isInteger(cantidad)) {
      throw new Error("La cantidad debe ser un número entero.");
    }
    this.cantidad += cantidad;
  }

  disponibilidad() {
    const disponibilidad = this.cantidad > 0 ? "Disponible" : "Agotado";
    return disponibilidad;
  }
}

class Inventario {
  static inventario = [];

  static agregarProducto(producto) {
    if (!(producto instanceof Producto)) {
      throw new Error("Solo se pueden agregar instancias de la clase Producto.");
    }
    if (this.inventario.some((p) => p.nombre === producto.nombre)) {
      throw new Error("El producto ya existe en el inventario.");
    }
    this.inventario.push(producto);
  }

  static eliminarProducto(nombre) {
    if (typeof nombre !== "string" || nombre.trim() === "") {
      throw new Error("El nombre debe ser un string no vacío.");
    }
    const nuevoInventario = this.inventario.filter(
      (producto) => producto.nombre !== nombre
    );
    if (nuevoInventario.length === this.inventario.length) {
      console.log("El producto no se encuentra en el inventario.");
    } else {
      this.inventario = nuevoInventario;
    }
  }

  static buscarProducto(nombre) {
    if (typeof nombre !== "string" || nombre.trim() === "") {
      throw new Error("El nombre debe ser un string no vacío.");
    }
    const producto = this.inventario.find(
      (producto) => producto.nombre === nombre
    );
    if (producto) {
      console.log(
        `Nombre: ${producto.nombre}, Precio: ${producto.precio}$, Cantidad: ${producto.cantidad}`
      );
    } else {
      console.log("El producto no se encuentra en el inventario.");
    }
  }

  static listarProductos() {
    if (this.inventario.length > 0) {
      this.inventario.forEach((producto) => {
        console.log(
          `Nombre: ${producto.nombre}, Precio: ${producto.precio}$, Cantidad: ${producto.cantidad}`
        );
      });
    } else {
      console.log("No hay productos en el inventario.");
    }
  }
}

// Crear 10 productos y agregarlos al inventario
const producto1 = new Producto("Manzanas", 1.5, 50);
const producto2 = new Producto("Naranjas", 2.0, 30);
const producto3 = new Producto("Plátanos", 1.2, 40);
const producto4 = new Producto("Peras", 1.8, 25);
const producto5 = new Producto("Uvas", 3.0, 20);
const producto6 = new Producto("Sandías", 5.0, 10);
const producto7 = new Producto("Melones", 4.5, 15);
const producto8 = new Producto("Fresas", 2.5, 35);
const producto9 = new Producto("Kiwi", 3.2, 18);
const producto10 = new Producto("Mangos", 2.8, 22);

Inventario.agregarProducto(producto1);
Inventario.agregarProducto(producto2);
Inventario.agregarProducto(producto3);
Inventario.agregarProducto(producto4);
Inventario.agregarProducto(producto5);
Inventario.agregarProducto(producto6);
Inventario.agregarProducto(producto7);
Inventario.agregarProducto(producto8);
Inventario.agregarProducto(producto9);
Inventario.agregarProducto(producto10);

Inventario.buscarProducto("Peras");

Inventario.eliminarProducto("Peras");

Inventario.buscarProducto("Peras");
console.log(producto1.disponibilidad());