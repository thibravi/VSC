// arrow function 
// um jeito rápido e curto de escrever a função. 
// se tiver mais de uma linha, vai precisar usar {} e return

const apresentarArrow = nome => "meu nome é ${nome}";
const soma = (num1, num2) => num1 + num2;

// arrow function com mais de uma linha de instrução

const somNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10)
        return "somente números de 1 a 9"
} else {
    retunr num1 + num2;
}

// HOISTING: arrow function se comporta como expressão