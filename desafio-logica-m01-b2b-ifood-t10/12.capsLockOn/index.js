// cONSIDERAMOS QUE UMA PALAVRA FOI ESCRITA COM cAPS lOCK SE OU TODAS AS SUAS LETRAS FOREM MAIÚSCULAS OU 
// SE A PRIMEIRA FOR MINÚSCULA E TODAS AS OUTRAS MAIÚSCULAS.
//  a CORREÇÃO NESSES CASOS É INVERTER TODAS AS LETRAS.

// let input = 'cAPS';
let input = 'CAPS';


function corrigirTexto(texto) {
    if (texto === texto.toUpperCase()) {
        return texto.toLowerCase();
    } else if (texto[0] === texto[0].toLowerCase() && texto.slice(1) === texto.slice(1).toUpperCase()) {
        return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
    } else {
        return texto;
    }
}

console.log(corrigirTexto(input));