
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

class Producto{
    constructor(nombre,precio,cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    actualizarCantidad(cantidad){
        this.cantidad += cantidad;
    }

    disponibilidad(){
        const disponibilidad = this.cantidad > 0 ? "Disponible" : "No Disponible";
        return disponibilidad
        //SIN TERMINAR
    }
}

