/* Crie uma classe para representar pessoas e calcular seu IMC.
*/

class Pessoa {
    altura;
    peso;
    nome;

    constructor (altura, peso, nome) {
        this.altura = altura;
        this.peso = peso;
        this.nome = nome;
    }

    calculoIMC () {
        return this.peso / (this.altura * 2);
    }

    classificarIMC () {
        const imc = this.calculoIMC();
        if (imc < 18.5) {
            return (this.nome, 'está abaixo do peso ideal');
        } else if (imc >= 18.5 && imc < 25) {
            return (this.nome, 'está no peso ideal');
        } else if (imc >= 25 && imc < 30) {
            return (this.nome, 'está acima do peso');
        } else if (imc >= 30 && imc < 40) {
            return (this.nome, 'está obeso(a)')
        } else {
            return (this.nome, 'tem Obesidade mórbida.')
        }
    }
}

const jose = new Pessoa(1.75, 70, 'José');
const joab = new Pessoa(1.80, 76, 'Joab');
const claudia = new Pessoa(1.68, 108, 'Claudia');
console.log(jose.classificarIMC());
console.log(joab.classificarIMC());
console.log(claudia.classificarIMC());