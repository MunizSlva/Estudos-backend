const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        let contadorProdutos = 0;
        let precoTotalItems = 0;
        for (produto of this.produtos) {
            contadorProdutos += produto.qtd;
            precoTotalItems += produto.qtd * produto.precoUnit;
        }
        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de itens: ${contadorProdutos} itens`);
        console.log(`Total a pagar: R$${precoTotalItems / 100},00`);
    },
    addProduto: function (produto) {
        let indiceProdutoExistente = -1;

        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].id === produto.id) {
                indiceProdutoExistente = i;
                break;
            }
        }

        if (indiceProdutoExistente === -1) {
            this.produtos[this.produtos.length] = produto;
        } else {
            this.produtos[indiceProdutoExistente].qtd += produto.qtd;
        }

    }

};

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

carrinho.addProduto(carrinho, novaBermuda);


const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}


carrinho.addProduto(carrinho, novoTenis);

carrinho.imprimirResumo();

