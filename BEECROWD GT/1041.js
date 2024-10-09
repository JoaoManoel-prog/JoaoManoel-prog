var input = require('fs').readFileSync('data/1041.txt', 'utf8');
var lines = input.split('\r\n');

let coordenadas = lines[0].split(" ")

let x = parseFloat(coordenadas[0])
let y = parseFloat(coordenadas[1])

if (x !== 0 && y !== 0) {
    if ( x > 0 && y > 0) {
        console.log(`Q1`)
    }
    if ( x < 0 && y > 0) {
        console.log(`Q2`)
    }
    if ( x < 0 && y < 0) {
        console.log(`Q3`)
    }
    if ( x > 0 && y < 0) {
        console.log(`Q4`)
    }
    if ( x === 0 && y !== 0) {
        console.log(`Eixo Y`)
    }
    if ( x !== 0 && y === 0) {
        console.log(`Eixo X`)
    }
    if (x === 0 && y === 0) {
        console.log('Origem')
    }
}