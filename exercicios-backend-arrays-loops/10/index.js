const numeros = [8, 11, 4, 1];

let maior = 0;
let menor = 1000;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    } else if (numeros[i] < menor) {
        menor = numeros[i];
    }
}

console.log(maior - menor);

let maiorDif = -Number.MAX_VALUE; // da o menor numero possivel

for (let x of numeros) { //comparando um numero
    for (let y of numeros) { //comparando outro numero
        const difAtual = x - y;
        if (difAtual > maiorDif) {
            maiorDif = difAtual
        }
    }
}