const numero = 2;
const numeroPar = (numero % 2) === 0;
const numeroDivide5 = (numero % 5) === 0;

/* Como usar a estrutura 'if': */

if ( /* Condição */ numeroPar === true ) {
    console.log('O número é par');
}
if (!numeroPar) {
    console.log('O número é impar');
}

/* Aninhamento de if..else */

if (numero === 0) {
    console.log('O número é inválido')
} else if (numeroDivide5) {
    console.log('sim')
} else {  
    console.log('Nope')
}