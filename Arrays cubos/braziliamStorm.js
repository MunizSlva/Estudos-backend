//retirar maior e menor nota, calcular media e retonrar o valro da nota


const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];

let menorNota = notas[0];
let maiorNota = notas[0];
let soma = 0;

for (let item of notas) {
    soma += item;
    if (item > maiorNota) {
        maiorNota = item;
    } if (item < menorNota) {
        menorNota = item;
    }
}

const somaCerta = soma - maiorNota - menorNota;
const media = somaCerta / (notas.length - 2);

console.log(media);

