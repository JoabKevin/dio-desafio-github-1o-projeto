# Arrays e estruturas de repetição

Já vimos que podemos criar objetos literais, que são atribuídos sem a necessidade de uma classe. Arrays, ou listas, são grupos de objetos.
Podemos criar listas de strings e muito mais.

A mesma lista pode conter strings, números e mais.

###### Exemplo:

<code>
    const alunos = ['João', 'Vitor', 'Marina'];
    console.log(alunos[0]);
</code>

#### Índice

A contagem começa sempre em zero.

### Adicionando à lista
<code>
    alunos.push('Renan');
    alunos[4] = 'Vinicius';  /* No método de inserir em uma posição, ele deleta o item que está na posição atual e substitui com o novo. */
</code>

### removendo da lista

<code>
    alunos.pop(); //remove o último item da lista.
    alunos.shift(); //remove o primeiro item.
</code>

# Estrutuas de repetição

Quando temos uma lista de tamanho dinâmico (variável), precisamos de uma estrutura de repetição para varrer essa lista.

Existem várias estruturas.

### Estrutura 'for'

A estrutura 'for' percorre uma lista uma determinada quantidade de vezes.

<code>
    for (let i = 0; i < 10; i++) {
        // executar o que for preciso.
    }
</code>



<pre> 
    <code>

    // Estruturas de repetição

    // estrutura 'for'

    for (let i = 0; i < 10; i++) {
        // executar o que for preciso.
        console.log(i)
    }

    const nome = 'Joab Kevin de Godoi';

    //   inicio     fim             passo
    for (let i = 0; i < nome.length; i++) {
        const letra = nome[i];
        console.log(letra);
    }

    // Listas / Arrays

    const notas = [];

    notas.push(5);
    notas.push(7);
    notas.push(8);
    notas.push(2);
    notas.push(5);
    notas.push(8);
    notas.push(10);
    let soma = 0;

    console.log(notas.length);

    // adicionada estrutura de repetição

    for (let i = 0; i < notas.length; i++) {
        let nota = notas[i];
        soma = soma + nota;
    }
    mediaAluno = soma / notas.length;
    console.log('Média do aluno: ', mediaAluno);

    // 
    </code>
</pre>