const recebe = require ('prompt-sync')();

let quem = recebe ("Como: " );
let deseja = recebe ("Eu desejo: ")
let para = recebe ("Para: ")

console.log (`Como ${quem} eu desejo ${deseja} para ${para}`);