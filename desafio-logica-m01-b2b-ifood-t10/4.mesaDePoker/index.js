// min é o mínimo necessário para se poder jogar nesta mesa. É necessário ter o mínimo ou mais.
// max é o máximo permitido para se poder jogar nesta mesa. É necessário ter o máximo, ou menos.
// valores é um array que contém os valores com os quais o jogadores estão tentando sentar na mesa para jogar

let aceito = valores.filter((numero) => {
    return numero >= min && numero <= max
});
console.log(aceito);
