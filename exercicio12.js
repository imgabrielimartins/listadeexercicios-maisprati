/*
Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa
e retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: 
peso ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
*/

const readlineSync = require('readline-sync');

let altura = readlineSync.questionFloat('Digte sua altura: ')
let sexo = readlineSync.question('Digite seu sexo(F/M): ');

function pesoIdeal(altura, sexo) {
  if (sexo === 'M' || sexo === 'm') {
    return 72.7 * altura - 58;
  } else if (sexo === 'F' || sexo === 'f') {
    return 62.1 * altura - 44.7;
  } else {
    return null;
  }
}

let resultado = pesoIdeal(altura, sexo);

if (resultado !== null) {
  console.log(`Seu peso ideal: ${resultado}`);
} else {
  console.log('Sexo inválido!');
}