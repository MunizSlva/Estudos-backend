function verificarFaixaDeIdade(idade) {
    if (idade <= 21) {
        return 'Jovem'
    } else if (idade < 65) {
        return 'Adulto(a)'
    } else {
        return 'Idoso(a)'
    }
};

let idadeVerificada = verificarFaixaDeIdade(30);

console.log(idadeVerificada);