const numeroCartao = '1111222233334444';

function formatarCartao(numeroCartao) {
    if (numeroCartao.length !== 16) {
        return "Número de cartão inválido.";
    }

    const digitosVisiveis = numeroCartao.slice(0, 4);
    const digitosOcultos = "*".repeat(8);
    const digitosFinais = numeroCartao.slice(12);

    return digitosVisiveis + digitosOcultos + digitosFinais;
}

console.log(formatarCartao(numeroCartao));
// Esconder número do cartão de crédito
// Faça um sistema que seja capaz de formatar uma string com os 16 números de um cartão de crédito,
//  de maneira que seja exibido apenas os 4 primeiros e os 4 últimos dígitos, substituindo os caracteres ocultos por *.

// const numeroCartao = '1111222233334444';
// Para o exemplo acima o sistema deverá imprimir:

// 1111********4444
// Faça o teste com outros exemplos.

// Faça commit do resultado.