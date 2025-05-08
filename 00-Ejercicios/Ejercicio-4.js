// Generar un número aleatorio entre 1 y 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let inputUser = document.querySelector("#intento")
let boton = document.querySelector(".verificar")

function ComparacionValores(value){
    if (value < numeroAleatorio) {
        alert("Tu número es menor que el número aleatorio");
    } else if (value > numeroAleatorio) {
        alert("Tu número es mayor que el número aleatorio");
    } else {
        alert("¡Felicidades! Adivinaste el número");
    }
}

boton.addEventListener("click",() => {
    ComparacionValores(inputUser.value)
})