// Calculo do IMC

const nome = 'Walef'
const peso = 92
const altura = 1.75
const sexo = 'Masculino' 

const imc = peso / (altura * altura)

if(imc >= 30) {
    console.log(`${imc}! ${nome}, você está acima do peso!`)
} else {
    console.log(`${imc}! ${nome}, você não está acima do peso`)
}

