const cpf = "12345678900";
const cnpj = "12345678900";


if (cpf.length === 11) {
    const cpfFormatado = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9)}`;
    console.log(cpfFormatado);
} else {
    console.log('CPF Inválido');

}

function formatarCnpj(cnpj) {
    if (cnpj.length === 14) {
        const cnpjFormatado = `${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}.${cnpj.slice(5, 8)}/${cnpj.slice(8, 12)}-${cnpj.slice(12)}`;
        console.log(cnpjFormatado);
    } else {
        console.log('CNPJ Inválido');
    }
}

formatarCnpj(cnpj);



// 12345678000199
// 12.345.678/0001-99


// b) Formatar CNPJ

// Validar o tamanho (14 números)
// Imprimir o CNPJ formatado se for válido
// Exemplo 1:

// const cnpj = "12345678900";
// Para o exemplo acima o sistema deverá imprimir:

// CNPJ Inválido
// Exemplo 2:

// const cnpj = "12345678000199";
// Para o exemplo acima o sistema deverá imprimir:

// 12.345.678/0001-99