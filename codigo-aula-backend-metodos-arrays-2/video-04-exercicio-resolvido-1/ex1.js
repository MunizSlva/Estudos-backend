
const usuarios = [
    { nome: 'joao', idade: 23 },
    { nome: 'theo', idade: 1 },
    { nome: 'dalvio', idade: 65 },
    { nome: 'jose', idade: 36 },
]

const fiscalizarFesta = (arrayObjetos) => {
    const resultado = arrayObjetos.every((objeto) => {
        return objeto.idade > 17;
    });

    if (resultado) {
        console.log('Festa liberada!');
    } else {
        console.log('Possui menor de idade!');
    }
}

fiscalizarFesta(usuarios);





// Crie uma função que receba um array de objetos de usuários que contém as propriedades nome e idade.
//  A função deve validar se todos os usuários são maiores de idade. Caso todos os usuários sejam maiores,
//  deverá exibir a mensagem "Festa liberada!", caso contrário, deverá exibir a mensagem "Possui menor de idade".