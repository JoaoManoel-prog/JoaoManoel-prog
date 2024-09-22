var input = require('fs').readFileSync('data/1043.txt', 'utf8');
var lines = input.split('\r\n');

let valores = (lines[0]).split(' ')
let lado1 = parseFloat(valores[0])
let lado2 = parseFloat(valores[1])
let lado3 = parseFloat(valores[2])

let condicao1 = lado1 + lado2 > lado3;
let condicao2 = lado1 + lado3 > lado2;
let condicao3 = lado2 + lado3 > lado1;
let formaTriangulo = condicao1 && condicao2 && condicao3;

let perimetro = lado1 + lado2 + lado3
let area = ((lado1 + lado2) * lado3) / 2

if (formaTriangulo === true) {
    console.log(`Perimetro = ${perimetro.toFixed(1)}`)
}
else {
    console.log(`Area = ${area.toFixed(1)}`)
}