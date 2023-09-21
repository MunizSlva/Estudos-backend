const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
frutas.splice(0, 1);
frutas.splice(frutas.length - 1, 1, 'Melão');

console.log(frutas);


const frutasInvertidas = frutas.reverse();
const stringFrutas = frutasInvertidas.join();


console.log(stringFrutas);




// const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
// Dado o array acima, faça o seguinte:

// a) Organize o array na ordem inversa e transforme em uma única string separada por vírgulas de forma q seja impresso:

// Uva, Pêra, Abacaxi, Maçã, Banana
// b) Remova o primeiro e último item do array original e adicione a fruta Melão ao novo array da seguinte forma:

// ['Maçã', 'Abacaxi', 'Pêra', 'Melão']
// Faça o teste com outros exemplos.

// Faça commit do resultado.