// A mãe do João deu uma lista de compras para ele ir até o mercado e comprar os itens da lista. Chegando no mercado,
//  João leu um aviso que informava a proibição da venda de dois tipos de bebidas alcoolicas naquele horário: cerveja e vodka.
//   Sendo assim, João precisa verificar se em sua lista possui alguma das duas bebidas.

// Faça um programa que use a função some() para validar essa lista de compras e caso encontre alguma das duas bebidas imprima revise sua lista,
//  joão. possui bebida com venda proibida!, caso contrário, imprima tudo certo, vamos as compras!.

// const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"]
// Para o exemplo acima, o programa deverá imprimir:

// revise sua lista, joão. possui bebida com venda proibida!
// Faça o teste com outros exemplos.

// Faça commit do resultado.

const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"]

function verificarLista(palavras) {
    return palavras.some(function (palavra) {
        return palavra === 'cerveja' || palavra === 'vodka';
    });
}

const contemBebidaProibida = verificarLista(palavras);

if (contemBebidaProibida) {
    console.log('Revise sua lista, João. Possui bebida com venda proibida!');
} else {
    console.log('Tudo certo, vamos às compras!');
}