const nome = "Walef";
const sexo = "M";
const idade = 50;
const contribuicao = 45;

const tempoSomado = idade + contribuicao

const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && tempoSomado >= 95
const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && tempoSomado >= 85

if (homemPodeAposentar ||  mulherPodeAposentar){
    console.log(`${nome}, você pode se aposentar`)
} else { console.log(`${nome}, você não pode se aposentar`)
}
    


   









