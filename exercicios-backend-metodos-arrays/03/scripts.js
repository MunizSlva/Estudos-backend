const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function separador(carros, posicao) {
    const grupoCarros = carros.splice(posicao, 3);
    let i = 0;
    if (grupoCarros[i] > grupoCarros[4]) {
        grupocarros[i] = grupocarros[4];
    }
    console.log(grupoCarros);
}

separador(nomes, posicao);





// Crie uma função que receba dois parâmetros, o primeiro sendo um array de carros e o segundo um número inteiro.
// A função deverá encontrar o carro na posição informada no segundo parâmetro e capturar 3 carros subsequentes incluindo o que foi encontrado
//  na posição informada. A função deve imprimir o resultado.

// const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
// const posicao = 3;
// Para o exemplo acima deverá imprimir:

// Corola - Fusca - Chevete
// Faça o teste com outros exemplos.

// Faça commit do resultado.