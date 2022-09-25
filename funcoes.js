// DECLARAÇÃO DE FUNÇÃO

// 1. declara a função

function imprimeTexto(texto) {
    console.log(texto)
}

// 2. executa a função (1 ou mais vezes)

imprimeTexto("oi");
imprimeTexto("outro texto");

// 3 formas de escrever as funções

function soma(){
    // o return precisa ser a última linha da função
    return 2 + 2;   
}

// console.log(soma())

imprimeTexto(soma());