let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

if (identificador.length < 6) {
    const identificadorFormatado = identificador.padStart(6, '0');
    identificador = identificadorFormatado;
}

const arrayNomes = nome.split(' ');
let nomeFormatado = '';
for (let item of arrayNomes) {
    let primeiraLetra = item.slice(0, 1);
    let restantedoNome = item.slice(1);

    nomeFormatado += primeiraLetra.toUpperCase() + restantedoNome + ' ';
}

nome = nomeFormatado;
const formatarEmail = email.trim();
email = formatarEmail;

console.log(identificador);
console.log(email);
console.log(nome);






// Quando o formulário do sistema de uma empresa é submetido, o sistema cria um objeto com as informações da seguinte forma:

// Antes de salvar as informações, precisamos formatar os dados seguindo as seguintes exigências:

// O nome e sobrenome precisam sempre começar com letra maiúscula;
// O e-mail não pode ter espaços em branco;
// Para testar, use o console.log() para imprimir cada propriedade do objeto formatado.

// Exemplo 1:

// console.log(identificador);
// Para o exemplo acima o sistema deverá imprimir:

// 000123
// Exemplo 2:

// console.log(nome);
// Para o exemplo acima o sistema deverá imprimir:

// José Silva Costa
// Exemplo 3:

// console.log(email);
// Para o exemplo acima o sistema deverá imprimir:

// jose@email.com
// Faça o teste com outros exemplos.

// Faça commit do resultado.