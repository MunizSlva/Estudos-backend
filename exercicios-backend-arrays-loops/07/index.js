const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let nomeComecaComA = [];

for (let nome of nomes) {
    const inicial = nome[0]; //aqui ele ta pegando o indice 0 da string como se fosse um array

    if (inicial === 'A' || inicial === 'a') {
        nomeComecaComA.push(nome);
    }
}

console.log(nomeComecaComA);
