/* 
Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando
um loop for ou while.
*/

const readlineSync = require('readline-sync');

let numero = readlineSync.questionInt('Digite um numero: ');

if (numero < 0) {
  console.log('Fatorial não existe para números negativos.');
  process.exit(1);
}

let resultado = 1;

for(let i = 2; i <= numero; i++){
    resultado *= i;
}

console.log(resultado);