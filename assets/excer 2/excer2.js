let nota1 = prompt("Digite a primeira nota");
let nota2 = prompt("Digite a segunda nota");

nota1 = Number(nota1); // o comando Number converte texto, que está nos parenteses, em número
nota2 = Number(nota2);

let media = (nota1 + nota2) / 2;
console.log(nota1);
console.log(nota2);
console.log(media);

if (media >= 7) {
    alert("Aluno aprovado");
} else if (media >= 5) {
    alert("Aluno em recuperação")
} else {
    alert("Aluno reprovado")
}