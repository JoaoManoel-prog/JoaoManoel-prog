var input = require('fs').readFileSync('data/1036.txt', 'utf8');
var lines = input.split('\r\n');

let valores = (lines[0]).split(' ')
let A = parseFloat(valores[0])
let B = parseFloat(valores[1])
let C = parseFloat(valores[2])
let DELTA

if (A !== 0){
    DELTA = Math.pow(B, 2) + (-4 * A * C)
}
if (DELTA > 0){
    let R1 = parseFloat(((-B) + Math.sqrt(DELTA, 2)) / (2 * A));
    let R2 = parseFloat(((-B) - Math.sqrt(DELTA, 2)) / (2 * A));
    console.log(`R1 = ${R1.toFixed(5)}`);
    console.log(`R2 = ${R2.toFixed(5)}`);
}
else {
    console.log(`Impossivel calcular`)
}
    console.log()