const soma = lista.reduce((acumulador, elementoAtual, indice, array) => {
    return acumulador + elementoAtual;
}, 0);

const media = soma / lista.length;

console.log(media);