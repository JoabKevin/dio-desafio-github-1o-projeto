/* 
1) Faça um algoritmo que receba 3 notas de um aluno e calcule a sua média.

Média = (nota1 + nota2 + nota3) / 3

Classificação:
    - Menor que 5 = REPROVADO
    - entre 5 e 7 = recuperação
    - = ou + que 7 = passou
*/

const nota1 = 2;
const nota2 = 8;
const nota3 = 5;
const media = (nota1 + nota2 + nota3) / 3;
console.log(media);
if (media >= 7) {
    console.log('Aprovado');
} else if (media < 7, media >= 5) {
    console.log('Passou raspando, recuperação');
} else if (media < 5) {
    console.log('REPROVADO!');
}