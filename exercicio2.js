/*
Crie um programa que classifica a idade de uma pessoa em categorias 
(criança, adolescente, adulto, idoso) com base no valor fornecido,
 utilizando uma estrutura de
controle if-else.
*/

const readlineSync = require('readline-sync');

let idade = readlineSync.questionInt('Digite sua idade: ')

if (idade <= 11) {
    console.log('Você é uma criança!')
} else if (idade >= 12 && idade <= 17) {  
    console.log('Você é um adolescente!')
} else if (idade >= 18 && idade <= 59) { 
    console.log('Você é um adulto!')
} else {
    console.log('Você é um idoso!')
}