/*
Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays.
*/

let dados = {
  marca: 'Toyota',
  ano: 2020,
  cores: ['prata', 'preto', 'branco'],
  preco: 85000,
  opcionais: ['ar-condicionado', 'GPS', 'teto solar'],
  combustivel: 'flex'
};

function eArray (){
    let resultado = {}
    for (let chave of Object.keys(dados)) {
        if (Array.isArray(dados[chave])){
            resultado[chave] = dados[chave]
        }
    }

    return resultado
}

console.log(eArray());