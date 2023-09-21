const temIngresso = true;
const censura = 16;
const idade = 15;
const estaComOsPais = true;

// tem ingresso e
// tem idade maior ou igual a censura OU esta com os pais

if (temIngresso === true) {
    if (idade >= censura || estaComOsPais === true) {
        console.log('Pode entrar');
    } else {
        console.log('Barrada');
    }
} else {
    console.log('Barrada');
}

// if (temIngresso) {
//     if (idade >= censura || estaComOsPais) {
//         console.log('Pode entrar');
//     } else {
//         console.log('Barrada');
//     }
// } else {
//     console.log('Barrada');
// }