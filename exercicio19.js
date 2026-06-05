/*
Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm
precedência sobre as do obj1 em caso de conflitos.
*/

let obj1 = {
  nome: 'Carlos',
  idade: 30,
  cidade: 'São Paulo',
  profissao: 'Engenheiro'
};

let obj2 = {
  nome: 'Carlos Silva',
  email: 'carlos@email.com',
  cidade: 'Rio de Janeiro',
  salario: 8000
};

function criarObjeto(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

console.log(criarObjeto(obj1, obj2));