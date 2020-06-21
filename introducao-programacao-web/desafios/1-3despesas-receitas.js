const usuarios = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];

function somaNumeros(numeros) {
  let soma = 0
  for (let numero of numeros) {
    soma = soma + numero
  }
  return soma
}

function encontrarSaldo(receitas, despesas) {
  const somaReceitas = somaNumeros(receitas)
  const somaDespesas = somaNumeros(despesas)

  return somaReceitas - somaDespesas
}


for (let usuario of usuarios) {
  const saldo = encontrarSaldo(usuario.receitas, usuario.despesas)

  if (saldo > 0) {
    console.log(`${usuario.nome} o saldo é positivo ${saldo.toFixed()}`)
  } else {
    console.log(`${usuario.nome}o saldo é negativo ${saldo.toFixed()}`)
  }
}

