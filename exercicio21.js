/*
Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor.
 */

let vendas = [
  { vendedor: 'Fabricio', 
    valor: 100.00 },
  { vendedor: 'Ana', 
    valor: 200.00 },
  { vendedor: 'Fabricio', 
    valor: 150.00 },
  { vendedor: 'Carlos', 
    valor: 300.00 },
  { vendedor: 'Ana', 
    valor: 250.00 },
  { vendedor: 'Carlos', 
    valor: 180.00 }
];

function soma (vendas){
    let resultado = {}
    for(let venda of vendas){
       if (resultado[venda.vendedor]) {
            resultado[venda.vendedor] += venda.valor;
        } else {
            resultado[venda.vendedor] = venda.valor;
        }
    }

    return resultado
}

console.log(soma(vendas));
