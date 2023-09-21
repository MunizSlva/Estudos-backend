const original = [1, 4, 12, 21, 53, 88, 112];

let arrayPares = []
for (let numero of original) {
    if (numero % 2 === 0) {
        arrayPares.push(numero); //inserindo no array de pares
    }
}

console.log(arrayPares);