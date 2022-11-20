function calculoImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classeImc (imc) {
    if (imc < 18.5) {
        return ('Abaixo do peso');
    } else if (imc >= 18.5 && imc < 25) {
        return ('Peso normal');
    } else if (imc >= 25 && imc < 30) {
        return ('Acima do peso');
    } else if (imc >= 30 && imc < 40) {
        return ('Obeso');
    } else {
        return ('Obesidade grave');
    }
}

// main
(function () {
    const peso = 75;
    const altura = 1.80;
    const imc = calculoImc(peso, altura);
    console.log(imc, classeImc(imc));
})()

/* Função imediatamente invocada: Envolva sua função com parênteses e a invoque ao início do programa para que ela se execute automaticamente. muito usado na web, pois isola o escopo em casos de códigos usados só uma vez. */