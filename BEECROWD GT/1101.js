var input = require('fs').readFileSync('data/1101.txt', 'utf8');
var lines = input.split('\r\n');

for (let linha = 0; linha < lines.length; linha++) {

    let valores = lines[linha].split(' ')
    let num1 = parseInt(valores[0])
    let num2 = parseInt(valores[1])

    let valoresUm = []
    let somaUm = 0
    
    if (num1 > num2) {
        for (num1, num2; num1 >= num2; num2++) {
            valoresUm.push(num2)
            somaUm += num2

        } console.log(valoresUm.join(' '), `Sum=${somaUm}`)

    } else {
        for (num1, num2; num2 >= num1; num1++) {
            valoresUm.push(num1)
            somaUm += num1

        } console.log(valoresUm.join(' '), `Sum=${somaUm}`)
    }
}