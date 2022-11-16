/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis, sendo elas:
    1 - preço do etanol;
    2 - preço da gasolina;
    3 - tipo do combustível usado;
    4 - Consumo médio do veículo;
    5 - Distância da viagem, em km.

Imprima no console o valor que será gasto para realizar esta viagem.

*/

const etanol = 3.19;
const gasolina = 4.99;
const combustivel = etanol;
const mediaConsumo = 10.5;
const dist = 350;

const combGasto = dist / mediaConsumo

if (combustivel === gasolina) {
    console.log(combGasto * gasolina);
} else if (combustivel === etanol) {
    console.log(combGasto * etanol);
}