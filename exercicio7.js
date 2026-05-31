/*
Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a
média aritmética desses números.
*/

const readlineSync = require('readline-sync');

let numero
let soma = 0
let contador = 0

do {
    numero = readlineSync.questionFloat('Digite um numero ou 0 para finalizar: ')
    
    if (numero !== 0) {
        soma += numero
        contador++
    }
    
} while (numero !== 0)

if (contador > 0) {
    let media = soma / contador
    console.log(`Média: ${media.toFixed(2)}`)
}