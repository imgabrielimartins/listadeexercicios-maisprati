/*
Implemente um programa que recebe uma nota de 0 a 10 e 
classifica como "Aprovado", "Recuperação", ou "Reprovado" 
utilizando if-else if.
*/

const readlineSync = require('readline-sync');

let nota = readlineSync.questionInt('Digite sua nota: ');

if (nota >= 7) {
    console.log('Aprovado!')
} else if (nota >= 5) {
    console.log('Recuperação!')
} else {
    console.log('Reprovado!')
}