function sayMyName (nome) {
    console.log('Meu nome é ' + nome);
}

sayMyName('Joab');

// função maioridade

function testeIdade (idade) {
    if (idade < 18) {
        console.log('Menor de idade');
    } else {
        console.log('Maior de idade');
    }
}

testeIdade(17);

// refazer exercício de cálculo de juros com funções

function calculePreco (preco, pag) {
    if (pag === 1) {
        console.log (preco - (preco * 0.1));
    } else if (pag === 2) {
        console.log (preco - (preco * 0.15));
    } else if (pag === 3) {
        console.log (preco);
    } else {
        console.log (preco + (preco * 0.10));
    }
}

/* Formas de pagamento:
    1 - Débito = 10% de desconto;
    2 - Dinheiro/PIX = 15% de desconto;
    3 - Crédito até 2x = preço normal;
    4 - Crédito parcelado = juros de 10%.
*/
calculePreco(150, 1);