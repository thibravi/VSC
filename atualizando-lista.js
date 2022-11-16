const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

//o splice pede 3 parâmetros
//1. onde começa
//2. quantos elementos vai remover
//3. qual elemento vai substituir, caso tenha

//listaDeChamada.splice(1, 2, 'Rodrigo')
listaDeChamada.splice(2,0,'Rodrigo')

console.log(`Lista de chamada: ${listaDeChamada}`)