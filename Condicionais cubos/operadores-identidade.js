const ehIdentico = 18 === 18; // aqui estou perguntando se 18 é igual a 18 tanto em tipo de dado quanto em valor
console.log(ehIdentico);

const naoEhIdentico = 18 !== '18'; // aqui não é
console.log(naoEhIdentico);

const ehIdentico2 = 18 == '18';
console.group(ehIdentico2); // aqui dara verdadeiro pq dois == so compara o conteudo e não o tipo de dado

