// Dado o array numérico abaixo, faça um programa que consiga validar se todos os números são pares. Se todos os itens do array forem par,
//  o programa deverá imprimir array válido, senão array inválido.

// Dica: utilize o método every()



const numeros = [0, 122, 4, 6, 7, 8, 44]

const resultado = (numeros) => {
    numeros.some((numero) => {
        return numero % 2 === 0;
    });
}

if (resultado) {
    console.log('array válido');
} else {
    console.log('array inválido');
}


resultado(numeros);
// Para o exemplo acima, o programa deverá imprimir:

// array inválido
// Faça o teste com outros exemplos.

// Faça commit do resultado.