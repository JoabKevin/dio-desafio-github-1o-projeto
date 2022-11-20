const Joab = {
    nome: 'Joab',
    idade: 24,
}

console.log(Joab);

Joab.altura = 1.80;

console.log(Joab);

const pessoa = {
    nome: 'Joab Godoi',
    idade: 24,
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

pessoa.descrever();

// Classes

// Como o objeto será:
class Pessoa {
    nome;
    idade;
    descrever () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}
//instância
const joab = new Pessoa();    
joab.nome = 'Joab Godoi';
joab.idade = 24; 

console.log(joab);

joab.descrever;