
function zerinho(jogadores) {
    let contagem0 = 0;
    let contagem1 = 0;
    let jogador0 = undefined;
    let jogador1 = undefined;

    for (const jogador of jogadores) {
        if (jogador.jogada === 0) {
            contagem0++;
            jogador0 = jogador.nome;
        } else if (jogador.jogada === 1) {
            contagem1++;
            jogador1 = jogador.nome;
        }
    }

    if (contagem0 === 1) {
        return jogador0;
    } else if (contagem1 === 1) {
        return jogador1;
    } else {
        return "NINGUEM";
    }
}

const resultado = zerinho(jogadores);
console.log(resultado);
