
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

// como depurar usando o vscode