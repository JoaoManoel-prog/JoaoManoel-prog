var input = require('fs').readFileSync('data/1064.txt', 'utf8');
var lines = input.split('\r\n');


let valoresPositivos = lines.map(Number).filter(valor => valor > 0)
let qtdPositivos = valoresPositivos.length

let mediaPositivos = valoresPositivos.reduce((acc, valor) => acc + valor, 0) / qtdPositivos
console.log(`${qtdPositivos} valores positivos`)
console.log(`${mediaPositivos.toFixed(1)}`)

console.log()
