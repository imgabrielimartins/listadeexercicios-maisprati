/*
Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.
*/

let M = [
  [3, -1, 4, -2, 7, 0, -5, 2],
  [-3, 6, -8, 1, -4, 9, 2, -7],
  [5, 2, -6, 3, 1, -9, 4, 8],
  [-2, -4, 7, -1, 6, 3, -8, 5],
  [1, 8, -3, 6, -7, 2, 4, -9],
  [-5, 3, 2, -6, 8, -1, 7, -4]
];

let C = []

for(let i = 0; i < 6; i++ ){
    C[i] = 0
    for(let j = 0; j < 8; j++){
        if (M[i][j] < 0) {
             C[i]++;
        }
    }
}

console.log(C)