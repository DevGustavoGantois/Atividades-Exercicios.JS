
const qtd = Number(prompt("Digite a quantidade de alunos:"));

for (let i = 0; i < qtd; i++) {
    let nota = Number(prompt("Digite a nota:"));
    media += nota;
}

media = media / qtd;
console.log(`A média das notas vai ser de ${media}`);

if (media < 5.9) {
    console.log("Recuperação, estude mais!");
} else if (media > 6.0) {
    console.log("Aprovado, parabéns.");
} else if (media > 10) {
    console.log("Você atingiu a quantidade máxima.");
} else if (media < 5.0 ) {
    console.log("Reprovado, estude mais.");
}

