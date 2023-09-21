
function solucao(stringCorrompida) {
    let purificado = '';
    for (let letra of stringCorrompida) {
        if (letra === '!' || letra === '@' || letra === '#' || letra === '$' || letra === '%' || letra === '&' || letra === '*' || letra === '(' || letra === ')') {

        } else {
            purificado = purificado + letra;
        }
    }
    console.log(purificado);
}

//!  @ # $ % & *()





































function solucao(letra, palavras) {
    let perderam = 0;
    for (let palavra of palavras) {
        const primeiraLetra = palavra[0];

        if (primeiraLetra !== letra) {
            perderam += 1;
        }
    }

    console.log(perderam);

}







// A entrada terá sempre duas variáveis:

// letra, que contém a letra que foi sorteada para essa rodada (sempre minúscula e sem acentos)
// palavras, que será sempre um array de strings contendo as palavras que cada uma das crianças escreveu (sempre minúsculas e sem acento)
// Output Format

// Imprima na tela apenas um número inteiro contendo a quantidade de crianças que PERDERAM nessa rodada.











function solucao(precos) {
    let soma = 0;
    for (let preco of precos) {
        soma += preco;
    }

    if (precos.length >= 5) {
        let menor:
            for (let preco of precos) {

        }
    }

}






// Uma loja que está com um estoque muito grande acumulado resolveu fazer uma promoção para que os clientes levem mais produtos.

// Caso o cliente compre 5 ou mais produtos, o mais barato deles sairá de graça!

// Para que essa promoção funcionasse, foi necessário fazer uma atualização no software do caixa para que fosse possível calcular o valor correto que o cliente deve pagar.

// Você ficou com essa tarefa.

// Input Format

// A entrada será sempre um array contendo apenas números inteiros e positivos representando o valor de cada um dos produtos (em centavos).

// Output Format

// Imprima na tela apenas um número que representa o total que deve ser pago pelo cliente (aplicando a promoção quando fizer sentido, claro).





















