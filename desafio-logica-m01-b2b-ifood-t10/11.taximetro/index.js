
let min = 25;
let km = 11.5;

// primeiros 10 min = 50 centavos minuto e 70 centavos o km
// dps de 10 min o km acima de 10 fica apenas 50 o km
// dps de 20 min o minuto acima de 20 fica 30 centavos

let precoMin = min * 50;
let precoKm = 0;

if (km > 10) {
    precoKm = 10 * 70 + (km - 10) * 50;
} else {
    precoKm = km * 70;
}

let precoTotal = precoMin + precoKm;

if (min > 20) {
    let minMais = min - 20;
    let descontoMin = minMais * 20;
    precoTotal -= descontoMin;
}


console.log(precoTotal);