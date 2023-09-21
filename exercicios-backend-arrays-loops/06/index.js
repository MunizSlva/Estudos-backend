const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

let soma = 0;
let indice = 0;

for (let pares of numeros) {
    if (pares % 2 === 0) {
        soma += pares;
    }
}

console.log(soma);





