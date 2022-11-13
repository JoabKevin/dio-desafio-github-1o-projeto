/*
Faça um programa para calcular o valor do combustível gasto em uma viagem.
Você terá três variáveis, sendo:
    - Preço do combustível, 
    - consumo do veículo, 
    - Distância percorrida.

Imprima no console o valor de combustível necessário para esta viagem.
*/ 

let comb = 4.99;
let consumo = 10.5;
let dist = 250;

/* Primeiro passo: dividir a distância pelo consumo do veículo para saber quantos litros serão gastos. */
let gasol = dist / consumo
/* Segundo passo: multiplicar a quantidade de litros pelo preço de cada litro. */
let preco = gasol * comb
/* Terceiro passo: imprimir o resultado na tela. */
console.log('Você vai gastar ')
console.log(preco)