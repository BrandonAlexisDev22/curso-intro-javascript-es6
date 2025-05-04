
// 🧪 Ejercicio: Sumar los salarios de un equipo
// Tienes un arreglo de empleados con sus salarios. Usa reduce para obtener el salario total que paga la empresa.

// const empleados = [
//     { nombre: "Ana", salario: 1200 },
//     { nombre: "Luis", salario: 1500 },
//     { nombre: "Carlos", salario: 1000 },
//     { nombre: "Laura", salario: 1800 }
// ];

// function totalSalario(empleados){
//     let totalSalario = empleados.reduce((total,empleado)=> {
//         return total + empleado.salario
//     },0)
//     return totalSalario;
// }

// console.log(totalSalario(empleados))

// 💡 Ejercicio: Convertir un array en un objeto por ID
// Tienes un arreglo de usuarios. Usa reduce para transformarlo en un objeto donde la clave sea el id y el valor sea el nombre.

// const usuarios = [
//     { id: 1, nombre: 'Ana' },
//     { id: 2, nombre: 'Luis' },
//     { id: 3, nombre: 'Carlos' }
//   ];

// function convertObject(users) {
//     let objectUsers = users.reduce((total,user) => {
//         total[user.id] = user.nombre
//         return total
//     },{})

//     return objectUsers
// }

// console.log(convertObject(usuarios))

// 💼 Ejercicio técnico: Buscar usuario activo por email
// Tienes una lista de usuarios con su estado (activo o inactivo). Escribe una función que reciba un email y devuelva el usuario solo si está activo. Si no lo encuentra o está inactivo, debe devolver null.
// const usuarios = [
//   { id: 1, nombre: 'Ana', email: 'ana@mail.com', activo: true },
//   { id: 2, nombre: 'Luis', email: 'luis@mail.com', activo: false },
//   { id: 3, nombre: 'Carlos', email: 'carlos@mail.com', activo: true }
// ];

// function searchUser(email) {
//     return usuarios.find(user => user.email === email && user.activo) || null
// }

// console.log(searchUser('ana@mail.com')) // TRUE
// console.log(searchUser('luis@mail.com')) // NULL


// 💡 Ejercicio: Buscar un número en una matriz
// Tienes una matriz (array de arrays) de números. Escribe una función que reciba un número y devuelva true si el número se encuentra en la matriz, y false si no.

const matriz = [
  [4, 8, 15],
  [16, 23, 42],
  [1, 2, 3]
];

function BuscarNumero(matriz,numero) {
    return matriz.some(fila => fila.includes(numero))
}

console.log(BuscarNumero(matriz,42))
