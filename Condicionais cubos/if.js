const idade = 24;

if (idade >= 18) {
    //caso a condição acima seja verdadeira aqui é executado
    console.log('É maior de idade');
} else {
    // é executado caso a condição seja false
    console.log('Não é maior de idade');
}

// o if e else sem as {} só funciona uma linha e com {} funciona tudo o que estiver dentro das chaves

if (idade < 18) {
    console.log('Menor de idade');
} else if (idade <= 65) {
    console.log('Adulta');
} else {
    console.log('Idosa');
}

const temIngresso = true;
const censura = 16;
const idadePessoa = 18;

// ter ingresso e ter idade maior ou igual que a censura

if (temIngresso === true) {
    if (idade >= censura) { //verifica se a idade é maior que a censura
        console.log('Pode entrar'); // se for imprime isso
    } else {
        console.log('Barrada pela censura'); // se mão for imprime isso
    }
} else {
    console.log('Barrada por falta de ingresso'); //se não tiver ingresso imprime isso
}
