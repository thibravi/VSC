const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']

// o método slice pede alguns parâmetros:
//1. número onde vamos começar a fazer o corte
//2. número onde vamos terminar de fazer o corte

                        //0 , 10
const sala1 = nomes.slice(0, nomes.length/2)
                        //10
const sala2 = nomes.slice(nomes.length/2)

console.log("Tamanho da array:", nomes.length)
console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 2: ${sala2}`)