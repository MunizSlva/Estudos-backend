// Dado um determinado array de palavras, faça um programa que verifica se existe ao menos uma palavra com mais de 5 caracteres.
//  Caso exista, o programa deverá imprimir existe palavra inválida, senão, o programa deverá imprimir array validado.

const palavras = ["livro", "caneta", "sol", "carro", "orelha"]


const resultado = palavras.some((palavra) => palavra.length > 5);

if (resultado) {
    console.log('palavra inválida');
} else {
    console.log('array validado');
}




