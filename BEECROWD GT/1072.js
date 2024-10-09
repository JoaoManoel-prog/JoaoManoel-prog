var input = require('fs').readFileSync('data/1072.txt', 'utf8');
var lines = input.split('\r\n');

let qntdTeste = parseInt(lines[0])
let linha = 1
let numero
let dentro = 0
let fora = 0

for (qntdTeste, linha; qntdTeste < 10000, linha <= qntdTeste; linha++ ) {
    numero = parseInt(lines[linha])
    if (numero <= 20 && numero >= 10) {
        dentro++
    } else {
        fora++
    }
}
console.log(`${dentro} in`)
console.log(`${fora} out`)