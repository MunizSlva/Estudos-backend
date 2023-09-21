const original = [5, 7, 13, 17, 26, 34, 118, 245];

let numeros = [];

for (let numero of original) {
    if (numero >= 10 && numero <= 20 || numero > 100) {
        numeros.push(numero);
    }
}

console.log(numeros);

// Declare um array contendo alguns números quaisquer.

// Depois crie um novo array que contenha apenas os números do array original que estejam entre 10 e 20,
// incluindo esses números, ou que sejam maiores que 100. Ao final, imprima a variável que guarda o novo array.
