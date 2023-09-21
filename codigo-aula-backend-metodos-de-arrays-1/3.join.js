// usado para juntar um array em uma string, sem passar nenhum argumento ele coloca , entre eles.. 
// se passar argumento por exemplo ' ou ' vai ter esse espaço ou espaço entre os itens
//se nao passar nenhum argumento fica grudado os itens sem espaço


const opcoes = ["Uma", "Outra"];



let resultado = opcoes.join();
console.log(resultado); //Uma,Outra

resultado = opcoes.join("");
console.log(resultado); //UmaOutra

resultado = opcoes.join(" ou ");
console.log(resultado); //Uma ou Outra