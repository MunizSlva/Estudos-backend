// Abaixo, temos uma lista de pessoas que representa os participantes de uma festa.
//  O Carlos se perdeu dos seus amigos e sua tarefa é encontrá-lo.
//   O lugar onde o Carlos se encontra é representado pela posição do objeto que contém seu nome na lista. Quando encontrar o Carlos,
//    caso ele esteja na posição 123, deverá imprimir Galera... O Carlos está na posição 123, corre lá!.

const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Carlos" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },
]

for (let i = 0; i < participantes.length; i++) {
    if (participantes[i].nome === 'Carlos') {
        console.log(`O Carlos está na posição ${i + 1}, corre lá!`);
    }
}; 
