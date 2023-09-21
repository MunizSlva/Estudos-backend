texto = 'um texto  qualquer'

const palavras = texto.split(' ');

const palavrasFiltradas = palavras.filter(function (palavra) {
    return palavra.trim() !== '';
});
console.log(palavrasFiltradas.length);




