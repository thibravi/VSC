const notas = [10, 7, 8, 5, 10]
notas.pop() // o método pop não aceita nenhum parâmento dentro

console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length

console.log(`A média é ${media}`)