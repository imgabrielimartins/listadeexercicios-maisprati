/*
Escreva um programa que recebe um número inteiro e 
verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.
*/

const readlineSync = require('readline-sync');

let numero = readlineSync.questionInt('Digite um numero: ')

if (numero % 2 === 0){
    console.log('Número par!')
} else{
    console.log('Número ímpar!')
}