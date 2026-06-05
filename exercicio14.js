/*
A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados
sobre salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até
R$350,00.
*/

const readlineSync = require('readline-sync');

function pesquisa() {
  let continuar = 'S';
  let totalSalarios = 0;
  let totalFilhos = 0;
  let contador = 0;
  let maiorSalario = 0;
  let salarioBaixo = 0;

  while (continuar === 'S' || continuar === 's') {
    let salario = readlineSync.questionFloat('Digite o salario: ');
    let numeroFilhos = readlineSync.questionInt('Digite o numero de filhos: ');

    totalSalarios += salario;
    totalFilhos += numeroFilhos;
    contador++;

    if (salario > maiorSalario) maiorSalario = salario;
    if (salario <= 350) salarioBaixo++;

    continuar = readlineSync.question('Deseja continuar? (S/N): ');
  }

  let mediaSalario = totalSalarios / contador;
  let mediaFilhos = totalFilhos / contador;
  let percentual = (salarioBaixo / contador) * 100;

  console.log(`\nMédia de salários: R$ ${mediaSalario.toFixed(2)}`);
  console.log(`Média de filhos: ${mediaFilhos.toFixed(1)}`);
  console.log(`Maior salário: R$ ${maiorSalario.toFixed(2)}`);
  console.log(`Percentual com salário até R$350: ${percentual.toFixed(1)}%`);
}

pesquisa();