const m = 90000;
const c = 60000;
const t = 24;

const taxa = (m / c) ** (1 / t) - 1;

console.log(`O seu financiamento de ${c} reais teve uma taxa de juros de ${taxa * 100}% , pois após ${t} meses você teve que pagar ${m} reais`)
