function inverterString(texto) {
    let arrayTexto = texto.split('');
    arrayTexto.reverse();
    const textoInvertido = arrayTexto.join('');
    console.log(textoInvertido);
    // let textoInvertido = '';
    // for (let letra of arrayTexto) {
    //     textoInvertido += letra;
    //     // textoInvertido = textoInvertido + letra; mesmsa cosia que a linha de cima
    // }
    // console.log(textoInvertido);
}

inverterString('abacaxi');
