function verificarFaixaDeIdade(idade) {
    if (idade <= 21) {
        return 'Jovem';
    } else if (idade < 65) {
        return 'Adulto(a)';
    } else {
        return 'Idoso(a)';
    }
};

function apresentacao(pessoa) {
    const faixaEtaria = verificarFaixaDeIdade(pessoa.idade);
    console.log(`Sou ${pessoa.nome}, sou um(a) ${faixaEtaria} de ${pessoa.idade} anos 
   e sou ${pessoa.profissao}.`);
};

const pessoa1 = {
    nome: "José",
    idade: 30,
    profissao: "professor"
};
apresentacao(pessoa1);

const pessoa2 = {
    nome: "Pedro",
    idade: 65,
    profissao: "médico"
};
apresentacao(pessoa2);

const pessoa3 = {
    nome: "Ana",
    idade: 19,
    profissao: "estudante"
};
apresentacao(pessoa3);

