/*
Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.
*/

const readlineSync = require('readline-sync');

let peso = readlineSync.questionFloat('Digite seu peso(kg): ')
let altura = readlineSync.questionFloat('Digite sua altura(m): ')

let imc = peso / (altura * altura)

if (imc <= 18.5) {
    console.log('Você está abaixo do peso!')
} else if (imc < 25.0) {          
    console.log('Você está no peso normal!')
} else if (imc < 30.0) {         
    console.log('Você está com sobrepeso!')
} else {
    console.log('Você está com obesidade!')
}

console.log(`Seu IMC é: ${imc.toFixed(2)}`)