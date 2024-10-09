var input = require('fs').readFileSync('data/1071.txt', 'utf8');
var lines = input.split('\r\n');

let x = (parseInt(lines[0])) - 1
let y = (parseInt(lines[1])) + 1
let valores = 0

for ((x), (y); y <= x; y++) {
    if (y % 2 === 1 | y % 2 === -1) {
        valores = y + valores
    }
}
console.log(valores)