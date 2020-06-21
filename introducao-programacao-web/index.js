// criar um programa que calcula média das turmas

const alunosDaTurmaA = [
    {
        nome: 'Walef',
        nota: 10
    },
    {
        nome: 'Iza',
        nota: 3
    },
    {
        nome: 'Abdnego',
        nota: 5
    },
    {
        nome: 'Julius',
        nota: 1
    }
]

const alunosDaTurmaB = [
    {
        nome: 'Kaliu',
        nota: 7
    },
    {
        nome: 'Alê',
        nota: 5
    },
    {
        nome: 'Heitor',
        nota: 4
    },
    {
        nome: 'Gabriel',
        nota: 5
    }
]

function calculaMedia(alunos) {
    let soma = 0
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }

    const media = soma / alunos.length
    return media
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)


function enviaMensagem(media, turma) {
    if (media >= 5) {
        console.log(`A média da ${turma} foi de ${media}. Parabéns!`)
    } else {
        console.log(`A média da ${turma} foi menor de 5. Burros!`)
    }
}

enviaMensagem(media1, 'turma A')
enviaMensagem(media2, 'turma B')


// Marcar aluno como reprovado se a nota for
// menor que 5.
//e, também, enviar uma mensagem.

function marcarComoReprovado(aluno) {
    aluno.reprovado = false;
    if (aluno.nota < 5) {
        aluno.reprovado = true;
    }
}

function enviarMensagemReprovado(aluno) {
    if (aluno.reprovado) {
        console.log(`O aluno ${aluno.nome} está reprovado!`)
    }
}

function alunosReprovados(alunos) {
    for (let aluno of alunos) {
        marcarComoReprovado(aluno);
        enviarMensagemReprovado(aluno)
    }
}

alunosReprovados(alunosDaTurmaA)
alunosReprovados(alunosDaTurmaB)
