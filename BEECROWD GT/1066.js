var input = require('fs').readFileSync('data/1066.txt', 'utf8');
var lines = input.split('\r\n');

let positivos = null;
let negativos = null;
let pares = null;
let impares = null;
let i;
let numero;

for (i = 0; i < 6; i++) {
    numero = parseFloat(lines.shift())
    if (numero != 0 && numero >= 0 && numero !== NaN) {
        ++positivos
    }
    if (numero != 0 && numero < 0 && numero !== NaN) {
        ++negativos
    }
    if (numero % 2 === 0 && numero !== NaN) {
        ++pares
    }
    if ((numero % 2 === -1 | numero % 2 === 1) && numero !== 0) {
        ++impares
    }
}
console.log(`${pares} valor(es) par(es)`)
console.log(`${impares} valor(es) impar(es)`)
console.log(`${positivos} valor(es) positivo(s)`)
console.log(`${negativos} valor(es) negativo(s)`)