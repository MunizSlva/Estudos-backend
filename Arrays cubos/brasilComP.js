let verificandoPalavra = false;

for (caractere of palavras) {
    if (caractere[0] === primeiraLetra && caractere[1] === segundaLetra) {
        verificandoPalavra = true;
        console.log(caractere);
    }
}

if (!verificandoPalavra) { //se nao encontrou nenhuma imprime nenhuma
    console.log('NENHUMA');
}



//tem que ser igual a primeiraletra e segunda letra se nao nenhuma

// A entrada será sempre composta por três variáveis:

// palavras: que será sempre um array de strings, contendo palavras que servem como base para a sua busca.
// As palavras sao sempre com todas as letras minusculas e sem acentos
// primeiraLetra: que será sempre um string contendo apenas um caractere (minúsculo), que deve ser a primeira letra das palavras
// segundaLetra: que será sempre um string contendo apenas um caractere (minúsculo), que deve ser a segunda letra das palavras
// Output Format

// Você deve imprimir na tela as palavras contidas no array de palavras que tem como primeira letra a primeiraLetra fornecida na entrada e a segunda letra
// a segundaLetra fornecida na entrada. Imprima uma palavra em cada linha.

// Caso não nenhuma palavra do array de palavras atenda aos requisitos, imprima na tela NENHUMA.