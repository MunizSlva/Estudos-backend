// a) Declare uma função de nome corrigirProva que tenha apenas um parâmetro chamado prova. Faça commit do resultado.

// b) Sabendo que o parâmetro prova será sempre um objeto com o seguinte formato:

// implemente a função corrigirProva de modo que, ao receber um objeto como este como parâmetro, o resultado seja o seguinte.

// O aluno(a) João acertou 3 questões e obteve nota 6
// Para testar sua implementação, chame a função corrigirProva passando o objeto prova exemplificado acima como argumento.

const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ],
    corrigirProva: function () {
        let acertos = 0;
        for (const questao of this.questoes) {
            if (questao.resposta === questao.correta) {
                acertos++;
            }
        };
        let valorPorQuestao = this.valor / this.questoes.length;
        const nota = valorPorQuestao * acertos;
        console.log(`O aluno(a) ${this.aluno} acertou ${acertos} questões e obteve nota ${nota}`);
    }

};

prova.corrigirProva();

