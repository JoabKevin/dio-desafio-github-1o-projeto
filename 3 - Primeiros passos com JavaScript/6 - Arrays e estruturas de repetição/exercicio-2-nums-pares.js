// faça um loop que percorra uma lista e imprima os números pares dela.

numeros = [2, 8, 7, 156, 221, 43, 3, 5, 5623, 5622, 12]
console.log('Números pares na lista: ')
for (let i = 0; i < numeros.length; i++) {
    testePar = numeros[i];
    if (testePar % 2  === 0) {
        console.log(testePar)
    }
}