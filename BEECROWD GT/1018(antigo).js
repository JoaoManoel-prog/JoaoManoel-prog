let Numero = parseInt(lines[0]);
let N = parseInt(lines[0]);
let nota100 = Math.floor(N / 100);
N %= 100; // atualiizar o valor de N
let nota50 = Math.floor(N / 50);
N %= 50;
let nota20 = Math.floor(N / 20);
N %= 20;
let nota10 = Math.floor(N / 10);
N %= 10;
let nota5 = Math.floor(N / 5);
N %= 5;
let nota2 = Math.floor(N / 2);
N %= 2;
let nota1 = Math.floor(N / 1);

console.log(`${Numero}`);
console.log(`${nota100} nota(s) de R$ 100,00`);
console.log(`${nota50} nota(s) de R$ 50,00`);
console.log(`${nota20} nota(s) de R$ 20,00`);
console.log(`${nota10} nota(s) de R$ 10,00`);
console.log(`${nota5} nota(s) de R$ 5,00`);
console.log(`${nota2} nota(s) de R$ 2,00`);
console.log(`${nota1} nota(s) de R$ 1,00`);