function apresentacao(pessoa) {
    if (pessoa.idade < 25) {
        return 'jovem'
    } else if (pessoa.idade < 65) {
        return 'Adulto'
    } else {
        return 'Idoso'
    }

};