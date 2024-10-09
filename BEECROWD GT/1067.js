var input = require('fs').readFileSync('data/1067.txt', 'utf8');
var lines = input.split('\r\n');

let valor = parseInt(lines[0])
let i 

for (i = 1; i <= valor; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}