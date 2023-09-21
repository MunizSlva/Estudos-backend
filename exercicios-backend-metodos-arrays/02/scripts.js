const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

function separar(nomes, tamanhoDoGrupo) {
    let contador = 0;
    for (let i = 0; i < nomes.length; i += tamanhoDoGrupo) {
        const grupo = nomes.slice(i, (i + tamanhoDoGrupo)).join(',')
        contador++
        console.log(`Grupo ${contador}: ${grupo}`)
    }
}


console.log(separar(nomes, tamanhoDoGrupo));


// Crie uma função que receba dois parâmetros, o primeiro sendo um array de nomes e o segundo um número inteiro.
//  A função deverá dividir o array em grupos com a quantidade de nomes de acordo com o numero passado no segundo parâmetro.
//   Caso não seja possível separar em grupos iguais, o último grupo será o restante dos nomes.
//    A função deve imprimir o resultado da divisão dos grupos.

// const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
// const tamanhoDoGrupo = 4;
// Para o exemplo acima deverá imprimir:

// Grupo 1: Juninho, Vidal, Guido, Dani.
// Grupo 2: Ruli, Diego.
// Faça o teste com outros exemplos.

// Faça commit do resultado.