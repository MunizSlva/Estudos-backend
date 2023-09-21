const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos


if (aposentada === true || portadoraDeDoenca === true) {
    console.log('Isenta');
} else if (totalDeRendimentos <= 2855970) {
    console.log('VAZA LEAO! JA TA DIFICIL SEM VOCE');
} else {
    console.log('PEGA LEAO');
}
// Segundo a receita federal, algumas pessoas são isentas do pagamento de imposto de renda (IR). Simplificamos aqui quem são essas pessoas:

// Pessoas portadores de alguma doença grave
// Pessoas que já estão aposentadas
// Para pessoa não esteja isenta, avalia-se seus rendimentos tributáveis ao longo do ano. Na condição em que o total de rendimentos seja superior
//a R$ 28.559,70, a pessoa deve pagar imposto de renda, caso contrário, não.
// Faça um programa que determine se a pessoa deve pagar IR ou não.

// Caso a pessoa não deva pagar IR por pertencer ao grupo de pessoas isentas, imprima na tela ISENTA
// Caso a passoa não deva pagar IR por nao ter o rendimento mínimo necessário, imprima na tela VAZA LEAO! JA TA DIFICIL SEM VOCE
// Caso a pessoa deva pegar IR imprima na tela PEGA LEAO