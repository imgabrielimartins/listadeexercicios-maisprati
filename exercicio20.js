/*
Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o
número de vezes que a string aparece no array.
*/

let frutas = ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'banana', 'uva', 'maçã', 'manga'];

let objChaves = { }

function contagem (frutas){
    for(let fruta of frutas){
        if (objChaves[fruta]) {
          objChaves[fruta]++;
        } else {
          objChaves[fruta] = 1;
        }
    }
}

contagem(frutas);
console.log(objChaves);