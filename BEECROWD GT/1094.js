var input = require('fs').readFileSync('data/1094.txt', 'utf8');
var lines = input.split('\r\n');

let testes = parseInt(lines[0])
let linhas = 1
let experimento
let quantidadeCobaias
let tipoCobaias

let totalCobaias = 0
let coelhos = 0
let ratos = 0
let sapos = 0

for (linhas, testes; linhas <= testes; linhas++) {
    experimentos = lines[linhas].split(' ')
    quantidadeCobaias = parseInt(experimentos[0])
    tipoCobaias = experimentos[1]

    if (experimentos[1] === 'C')
        coelhos += quantidadeCobaias
    if (experimentos[1] === 'R')
        ratos += quantidadeCobaias
    if (experimentos[1] === 'S')
        sapos += quantidadeCobaias

    totalCobaias = coelhos + ratos + sapos
}
console.log(`Total: ${totalCobaias} cobaias  `)
console.log(`Total de coelhos: ${coelhos}`)
console.log(`Total de ratos: ${ratos}`)
console.log(`Total de sapos: ${sapos}`)
console.log(`Percentual de coelhos: ${((coelhos * 100) / totalCobaias).toFixed(2)} %`)
console.log(`Percentual de ratos: ${((ratos * 100) / totalCobaias).toFixed(2)} %`)
console.log(`Percentual de sapos: ${((sapos * 100) / totalCobaias).toFixed(2)} %`)