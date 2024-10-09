var input = require('fs').readFileSync('data/1048.txt', 'utf8');
var lines = input.split('\r\n');

let salario = parseFloat(lines[0])
let novoSalario
let diferencaSalario
let porcentagemAumento

//aumento de 15%, caso o salario for menor que 400
if (salario <= 400.00) {
    novoSalario = salario * 1.15
    diferencaSalario = novoSalario - salario
    porcentagemAumento = 15
    console.log(`Novo salario: ${novoSalario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${diferencaSalario.toFixed(2)}`)
    console.log(`Em percentual: ${porcentagemAumento} %`)
}

if (salario <= 400.00) {
    novoSalario = salario * 1.15
    diferencaSalario = novoSalario - salario
    porcentagemAumento = 15
    console.log(`Novo salario: ${novoSalario.toFixed(2)}
Reajuste ganho: ${diferencaSalario.toFixed(2)}
Em percentual: ${porcentagemAumento} %`)
}

//aumento de 12%, caso o salario for menor ou igual a 800 e maior que 400.01
if (salario <= 800.00 && salario >= 400.01) {
    novoSalario = salario * 1.12
    diferencaSalario = novoSalario - salario
    porcentagemAumento = 12
    console.log(`Novo salario: ${novoSalario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${diferencaSalario.toFixed(2)}`)
    console.log(`Em percentual: ${porcentagemAumento} %`)
}

//aumento de 10%, caso o salario for menor ou igual a 1200 e maior que 800.01
if (salario >= 800.01 && salario <= 1200.00) {
    novoSalario = salario * 1.10
    diferencaSalario = novoSalario - salario
    porcentagemAumento = 10
    console.log(`Novo salario: ${novoSalario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${diferencaSalario.toFixed(2)}`)
    console.log(`Em percentual: ${porcentagemAumento} %`)
}

//aumento de 7%, caso o salario for menor ou igual a 2000 e maior que 1200.01
if (salario >= 1200.01 && salario <= 2000.00) {
    novoSalario = salario * 1.07
    diferencaSalario = novoSalario - salario
    porcentagemAumento = 7
    console.log(`Novo salario: ${novoSalario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${diferencaSalario.toFixed(2)}`)
    console.log(`Em percentual: ${porcentagemAumento} %`)
}

//aumento de 4%, caso o salario for maior que 2000
if (salario > 2000.00) {
    novoSalario = salario * 1.04
    diferencaSalario = novoSalario - salario
    porcentagemAumento = 4
    console.log(`Novo salario: ${novoSalario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${diferencaSalario.toFixed(2)}`)
    console.log(`Em percentual: ${porcentagemAumento} %`)
}

console.log()