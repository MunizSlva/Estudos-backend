function apresentacao(nome, idade, profissao, altura) {
    let analiseIdade;
    if (idade < 18) {
        analiseIdade = 'Jovem'
    } else if (idade >= 18 && idade < 60) {
        analiseIdade = 'Adulto'
    } else {
        analiseIdade = 'Idoso'
    }
    console.log(`Olá meu nome é ${nome}, sou um ${analiseIdade} de ${idade} anos, ${altura}m de altura e sou ${profissao}`);
}


apresentacao('Matheus', '24', 'Estudante', 1.74);