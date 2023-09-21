const ordemCrescente = numeros.sort(function (a, b) {
    return a - b;
});

const maisNovo = ordemCrescente.find((numeros) => {
    return numeros >= 18;
});

if (maisNovo === undefined) {
    console.log('CRESCA E APARECA')
} else {
    console.log(maisNovo);
}

