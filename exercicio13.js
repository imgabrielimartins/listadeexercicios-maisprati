/*
Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no
seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
○ Matrícula:
○ Nome:
○ Salário bruto:
○ Dedução INSS:
○ Salário líquido:
○ (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a
redução do INSS).
*/

let matriculas = Array.from({length: 80}, (_, i) => i + 1);
let nomes = [
  'Ana Silva', 'Carlos Souza', 'Beatriz Oliveira', 'Diego Santos', 'Fernanda Costa',
  'Lucas Pereira', 'Mariana Alves', 'Pedro Ferreira', 'Juliana Lima', 'Rafael Gomes',
  'Camila Martins', 'Thiago Rocha', 'Larissa Carvalho', 'Bruno Ribeiro', 'Patrícia Nunes',
  'Rodrigo Barbosa', 'Gabriela Mendes', 'Felipe Nascimento', 'Natália Cardoso', 'Gustavo Araújo',
  'Letícia Moreira', 'Henrique Correia', 'Vanessa Teixeira', 'Marcos Cavalcante', 'Isabela Freitas',
  'Leonardo Castro', 'Aline Monteiro', 'Eduardo Azevedo', 'Priscila Melo', 'Vinicius Cunha',
  'Tatiane Pinto', 'Alexandre Ramos', 'Renata Dias', 'Fábio Fernandes', 'Cristina Lopes',
  'André Vieira', 'Mônica Campos', 'Daniel Moraes', 'Silvana Coelho', 'Paulo Macedo',
  'Regina Peixoto', 'Roberto Queiroz', 'Vera Figueiredo', 'Sérgio Borges', 'Lúcia Guimarães',
  'Marcelo Sampaio', 'Sandra Brito', 'Ricardo Vasconcelos', 'Eliane Soares', 'Fernando Andrade',
  'Denise Nogueira', 'Leandro Pacheco', 'Adriana Rodrigues', 'Rogério Henrique', 'Cláudia Simões',
  'Márcio Teles', 'Simone Barros', 'Evandro Pires', 'Débora Fonseca', 'Cássio Marques',
  'Flávia Rezende', 'Gilberto Lacerda', 'Sueli Miranda', 'Valter Santana', 'Neuza Esteves',
  'Edmundo Vargas', 'Tereza Salles', 'Arnaldo Chaves', 'Célia Duarte', 'Raimundo Leal',
  'Conceição Bezerra', 'Benedito Paiva', 'Aparecida Matos', 'Antônio Leite', 'Maria Vilaça',
  'José Drummond', 'João Medeiros', 'Francisco Prates', 'Francisca Veloso', 'Luiz Tavares'
];
let salarios = [3200, 4500, 2800, 6100, 3900, 5200, 4100, 7300, 2600, 4800,
                5600, 3400, 6800, 2900, 5100, 4300, 7100, 3700, 4900, 6200,
                2700, 5400, 3600, 6500, 4000, 5800, 3100, 7500, 2500, 4600,
                5300, 3800, 6700, 2400, 5000, 4200, 7200, 3300, 4700, 6300,
                2800, 5500, 3500, 6600, 4100, 5900, 3000, 7400, 2600, 4800,
                5700, 3600, 6900, 2700, 5200, 4400, 7000, 3800, 4900, 6400,
                2900, 5600, 3400, 6800, 4200, 6000, 3200, 7600, 2500, 4700,
                5400, 3700, 6600, 2600, 5100, 4300, 7300, 3500, 4800, 6200];

console.log('\n--- Tabela de Funcionários ---');
console.table(
  matriculas.map((matricula, i) => ({
    Matrícula: matricula,
    Nome: nomes[i],
    'Salário Bruto': `R$ ${salarios[i].toFixed(2)}`,
    'Dedução INSS': `R$ ${(salarios[i] * 0.12).toFixed(2)}`,
    'Salário Líquido': `R$ ${(salarios[i] * 0.88).toFixed(2)}`
  }))
);

               