const letras = ["A", "a", "B", "C", "E", "e"];

let contador = 0;
for (let letra of letras) {
    if (letra === 'e' || letra === 'E') {
        contador++;
    }
}

if (contador === 0) {
    console.log('Nenhuma letra "E" ou "e" foi encontrada.');
} else if (contador === 1) {
    console.log('Foi encontrada 1 letra "e"');
} else {
    console.log(`Foram encontradas ${contador} letras 'E' ou 'e'`);
}
