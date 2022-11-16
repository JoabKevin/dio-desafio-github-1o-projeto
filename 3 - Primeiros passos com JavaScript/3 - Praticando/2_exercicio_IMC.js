/* Faça um algoritmo que calcule o imc.

fórmula do IMC:
IMC = peso / (altura * 2)

IMC em adultos:
    - abaixo de 18.5 = abaixo do peso;
    - entre 18.5 e 25 = peso normal;
    - entre 25 e 30 = acima do peso;
    - entre 30 e 40 = obeso;
    - entre 40 e 50 = Obesidade grave.

*/

const peso = 77
const alt = 1.80
const imc = peso / (alt * 2)
console.log(imc)

if (imc <= 18.5) {
    console.log('Abaixo do peso')
} else if (imc > 18.5, imc <= 25) {
    console.log('Peso normal')
} else if (imc > 25, imc <= 30) {
    console.log('Acima do peso')
} else if (imc > 30, imc <= 40) {
    console.log('Obesidade')
} else if (imc > 40) {
    console.log('Obesidade Grave')
}