const precos = [200, 150];

if (precos.length >= 3) {
    const ordemCrescente = precos.sort(function (a, b) {
        return a - b;
    });

    const desconto = ordemCrescente[0] * 0.50;

    const solucao = ordemCrescente.reduce((acumulador, elementoAtual, indice, array) => {
        return acumulador + elementoAtual;
    })

    console.log(solucao - desconto);
} else {
    const semDesconto = precos.reduce((acumulador, elementoAtual, indice, array) => {
        return acumulador + elementoAtual;
    })
    console.log(semDesconto);
}