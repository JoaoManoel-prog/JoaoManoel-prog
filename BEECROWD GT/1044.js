var input = require('fs').readFileSync('data/1044.txt', 'utf8');
var lines = input.split('\r\n');

let valores = lines[0].split(" ")

let num1 = parseInt(valores[0])
let num2 = parseInt(valores[1])
let mmc

if (num1 > num2 ){
    mmc = num1 / num2
    if (mmc === parseInt(mmc)) {
        console.log(`Sao Multiplos`)
    } else {
        console.log(`Nao sao Multiplos`)
    }
} else {
    mmc = num2 / num1
    if (mmc === parseInt(mmc)) {
        console.log(`Sao Multiplos`)
    } else {
        console.log(`Nao sao Multiplos`)
    }
}
console.log