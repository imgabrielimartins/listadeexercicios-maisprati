/*
Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados.
*/

const readlineSync = require('readline-sync');

let nomes = []

for(let i = 1; i <= 7; i++){
    nomes.push(readlineSync.question('Digite um nome: '))
}

nomes.reverse();
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}