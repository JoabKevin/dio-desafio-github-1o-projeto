//Exercício: registrar 2 pessoas e comparar a idade delas com uma função.

class Pessoa {
    nome;
    idade;
    anoNasc; 

    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoNasc = 2022 - idade;
    }

    descrever () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const joab = new Pessoa('Joab', 24);
const claudia = new Pessoa('Claudia', 26);

function comparaIdade(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} têm a mesma idade.`);
    }
}

comparaIdade(joab, claudia);