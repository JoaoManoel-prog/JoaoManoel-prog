var input = require('fs').readFileSync('data/1038.txt', 'utf8');
var lines = input.split('\r\n');

let cardapio = (lines[0]).split(' ')
let codigo = parseInt(cardapio[0])
let quantidade = parseInt(cardapio[1])

let cachorroQuente = 4
let xSalada = 4.5
let xBacon = 5
let torradaSimples = 2 
let refrigerante = 1.5

if (codigo == 1){
    codigo = cachorroQuente
    console.log(`Total: R$ ${(codigo * quantidade).toFixed(2)}`)
}
if (codigo == 2){
    codigo = xSalada
    console.log(`Total: R$ ${(codigo * quantidade).toFixed(2)}`)
}
if (codigo == 3){
    codigo = xBacon
    console.log(`Total: R$ ${(codigo * quantidade).toFixed(2)}`)
}
if (codigo == 4){
    codigo = torradaSimples
    console.log(`Total: R$ ${(codigo * quantidade).toFixed(2)}`)
}
if (codigo == 5){
    codigo = refrigerante
    console.log(`Total: R$ ${(codigo * quantidade).toFixed(2)}`)
}