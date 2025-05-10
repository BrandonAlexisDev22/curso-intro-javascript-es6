// // Simulating an asynchronous operation
// async function sayHello() {
//     return "Hello, world!";
// }

// // Async function to call the operation
// async function greet() {
//     const message = await sayHello(); // Wait for the result
//     console.log(message);
// }

// // Call the async function
// greet();

function returnData(callback){
    setTimeout(function(){
        callback('Ejecutando Codigo');
    },1000)
}

console.log("Start of programm") // 1
returnData(function(data) {
    console.log(data) // 3
    console.log("End programm") // 4
})
console.log("Async in process") // 2