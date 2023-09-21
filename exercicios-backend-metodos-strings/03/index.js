const texto = "Aprenda programar do zero na Cubos Academy";

function replaceAll(original, text, newText) {
    while (original !== original.replace(text, newText)) {
        original = original.replace(text, newText);
    }
    return original;
}

console.log(replaceAll(texto, ' ', '-'));



// URL amigável
// Faça um sistema que transforma um texto em uma URL amigável

// Obs.: Uma URL amigável é formada por caracteres minúsculos, separados por hífem, sem espaços.

// Exemplo:

// const texto = "Aprenda programar do zero na Cubos Academy";
// Para o exemplo acima o sistema deverá imprimir:

// aprenda-programar-do-zero-na-cubos-academy
// Faça o teste com outros exemplos.

// Faça commit do resultado.

