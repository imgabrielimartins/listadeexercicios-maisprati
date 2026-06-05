/*
Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.
*/

const readlineSync = require('readline-sync');

let nomes = []
let idades = []

for(let i = 0; i < 9; i++){
    nomes.push(readlineSync.question('Digite o nome: '))
    idades.push(readlineSync.questionInt('Digite a idade: '))
}

for (let i = 0; i < 9; i++) {
  if (idades[i] < 18) {
   console.log('\n--- Menores de idade ---');
    for (let i = 0; i < 9; i++) {
  if (idades[i] < 18) {
    console.log(`Nome: ${nomes[i]} | Idade: ${idades[i]} anos`);
  }
      }
    }
}