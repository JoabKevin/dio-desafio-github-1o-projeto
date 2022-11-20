# Objetos e classes

Quando criamos uma variável, declaramos um valor para ela, normalmente valores literais. Já os objetos são *coleções* de valores. Um objeto guardará _vários_ valores juntos.
Exemplo: 
<code>
    const Joab = {
        nome: Joab Godoi,
        idade: 24
    }
</code>

##### Para separar valores dentro de um objeto usa-se vírgula normal e dois pontos.
##### Para atribuir valores usa-se dois pontos, não o sinal de atribuição "=".

Como usar:
<code>
    console.log(Joab.nome);  (imprime apenas o valor pedido)
    console.log(Joab.idade);
    console.log(Joab); (imprime todos os valores no objeto)
</code>

# Para atribuir valores a um objeto:
<code>
    Joab.altura = 1.80;
</code>

## Conceito de escopo e definição 

Trabalhando dentro de um objeto, pode-se usar o método 'this' para que a função dentro do objeto use as variáveis que estão *dentro dele*.
Exemplo:
<code>
    const pessoa = {
        nome: Joab Godoi,
        idade: 24,
        descrever: function () {
            console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
        }
    }
</code>

##### Para este tipo de definição, usa-se *crase*, não aspas simples.

## Como acessar os valores de um objeto de modo mais dinâmico:
<code>
    console.log(pessoa['nome']);
</code>

# Classes

Classes definem como vários objetos serão formados.

Exemplo:

<code>
    class Pessoa {
        nome;
        idade;
        descrever () {
            console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
        }
    }

    const joab = new Pessoa();
    joab.nome = 'Joab Godoi';
    joab.idade = 24; 

    console.log(joab);

    joab.descrever;    
</code>

##### Quando uma pessoa é instanciada (inserida), como usar a função constructor:

<code>
class Pessoa {
    nome;
    idade;

    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
</code>

##### isso obriga a inserir um dado naquele espaço.