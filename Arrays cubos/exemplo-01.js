const nomePaises = ['Argentina', 'Holanda', 'Irlanda', 'Bolivia', 'Inglaterra'];

nomePaises.push('Brasil');

console.log(nomePaises);

nomePaises.pop();

console.log(nomePaises);

nomePaises.unshift('Jamaíca');

console.log(nomePaises);

nomePaises.shift();

console.log(nomePaises);

const ultimo = nomePaises[nomePaises.length - 1];
console.log(ultimo);

console.log(nomePaises[1]);
console.log(nomePaises[2]);