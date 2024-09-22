const input = require('fs').readFileSync('data/1019.txt', 'utf8');
const lines = input.split('\r\n');

let segundos = parseInt(lines[0]);
let horas = Math.floor(segundos / 3600);
// atualiizar o valor de segundos
segundos = segundos % 3600 // ou segundos %= 3600
let minutos = Math.floor(segundos / 60);
segundos = segundos % 60 // ou segundos %= 60

console.log(`${horas}:${minutos}:${segundos}`)