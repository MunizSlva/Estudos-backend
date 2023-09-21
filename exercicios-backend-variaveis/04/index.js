const capital = 1000;
const taxaJuros = 0.125;
let tempo = 5;

const montante = capital * (1 + taxaJuros) ** tempo;
console.log(montante);