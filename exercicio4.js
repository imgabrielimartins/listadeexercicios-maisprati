/*
Crie um menu interativo no console que oferece ao usuário a 
escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.
*/

const readlineSync = require('readline-sync');

console.log('*************************************************')
console.log('**                Bem-vindo(a)                 **')
console.log('**               A Casa do Café                **')
console.log('*************************************************')
console.log('**                    Menu                     **')
console.log('*************************************************')
console.log('              1- Espresso - R$ 12,00             ')
console.log('              2- Cappuccino - R$ 18,00           ')
console.log('              3- Latte - R$ 15,00                ')
console.log('*************************************************')

let escolhaMenu = readlineSync.questionInt('Escolha seu cafe favorito: ')

switch(escolhaMenu){
    case 1:
        console.log('Você escolheu o café espresso!')
        break
    case 2: 
        console.log('Você escolheu o cappuccino!')
        break
    case 3: 
        console.log('Você escolheu o latte!')
        break
    default:
        console.log('Digite um número válido!')
}