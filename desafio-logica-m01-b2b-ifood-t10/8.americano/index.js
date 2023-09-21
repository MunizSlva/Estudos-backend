const numeros = [1, 3, 2, 1,];

function encontrarGoleiro(numeros) {
    const s = numeros.reduce((total, num) => total + num, 0);

    let posicaoAtual = 1;

    for (let i = 0; i < s; i++) {
        if (posicaoAtual > numeros.length) {
            posicaoAtual = 1;
        }
        if (i === s - 1) {
            return posicaoAtual;
        }
        posicaoAtual++;
    }
}

const posicaoGoleiro = encontrarGoleiro(numeros);
console.log(posicaoGoleiro);