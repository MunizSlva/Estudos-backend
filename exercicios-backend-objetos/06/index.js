// Dado a lista de usuários abaixo, separe os usuários que possuem menos de 18 anos dos demais. Para isso,
//  você deverá criar duas novas constantes jovens e adultos. 
//  Todos os usuários menores de 18 anos devem ser inseridos na constante jovens e os demais na constante adultos.

const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
];

const jovens = [];
let indiceJovens = 0;
const adultos = [];
let indiceAdultos = 0;


for (const usuario of usuarios) {
    if (usuario.idade < 18) {
        jovens[indiceJovens] = usuario;
        indiceJovens++;
    } else {
        adultos[indiceAdultos] = usuario;
        indiceAdultos++;
    }
};


console.log(jovens, adultos);