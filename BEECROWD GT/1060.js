var input = require('fs').readFileSync('data/1060.txt', 'utf8');
var lines = input.split('\r\n');

let positivos = 0;
let i
let numero

for(i = 0; i < 6; i++) {
    numero = parseFloat(lines[i])
    if (numero > 0) {
        ++positivos
    }
}
console.log(`${positivos} valores positivos`)