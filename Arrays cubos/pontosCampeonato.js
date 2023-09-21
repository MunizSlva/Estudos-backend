

const resultados = ["V", "E", "V", "E"];
let pontos = 0;
for (jogo of resultados) {
    if (jogo === 'V') {
        pontos += 3;
    } else if (jogo === 'E') {
        pontos += 1;
    }
}

console.log(pontos);


// Num campeonato de futebol, um time joga várias partidas ao longo do ano e vai somando pontos de acordo com seu resultado em cada partida. Um time ganha:

// 3 pontos quando vence uma partida
// 1 ponto quando empata uma partida
// nenhum ponto quando perde uma partida
// Você está trabalhando no setor de TI de um clube de futebol que deseja fazer várias simulações de desempenho a depender do seu resultado em cada jogo.

// Para facilitar esse trabalho, você deve desenvolver o programa que calcula a pontuação final do clube a depender desses resultados em cada partida.

// Input Format

// A entrada será sempre composta por apenas uma variável resultados que é um array contendo as várias strings, que definem qual foi o resultado do time em cada partida

// Cada item desse array é sempre do tipo string, contendo uma das opções abaixo:

// V, que representa que o time venceu essa partida
// E, que representa que o time empatou essa partida
// D, que representa que o time perdeu essa partida
// Output Format

// Imprima na tela apenas um número representando a quantidade de pontos ganhos pelo time na competição.
