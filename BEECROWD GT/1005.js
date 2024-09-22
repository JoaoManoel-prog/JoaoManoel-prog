const input = require('fs').readFileSync('data/1005.txt', 'utf8');
const lines = input.split('\r\n');

let notaA = parseFloat (lines[0]);
let notaB = parseFloat (lines[1]);

const pesoA = 3.5;
const pesoB = 7.5;

let MEDIA = (notaA * pesoA + notaB * pesoB) / (pesoA + pesoB);

console.log(`MEDIA = ${MEDIA.toFixed(5)}`);
