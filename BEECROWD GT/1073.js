var input = require('fs').readFileSync('data/1073.txt', 'utf8');
var lines = input.split('\r\n');

let valor = parseInt(lines[0])
let pares = parseInt(4)
let quadrados = 0

for (valor, quadrados, pares; quadrados <= valor; pares += 2) {
    if (pares >= 4 && pares % 2 === 0) {
        quadrados = parseInt(pares / Math.sqrt(pares, 2))
        if ((Math.pow(quadrados, 2) === pares) && quadrados <= valor) {
            console.log(`${quadrados}^2 = ${pares}`)
        }
    }
}