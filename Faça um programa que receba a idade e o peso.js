var pessoas90 = 0;
let idade1 = 24;
let idade2 = 45;
let idade3 = 30;
let idade4 = 55;
let idade5 = 60;

var MediaIdade = (idade1 + idade2 + idade3 + idade4 + idade5) / 5


for(var p = 0; p < 6; p++ ) {
    var peso = console.log(`A pessoa ${p} tem peso: `);
    var idade = console.log(`A pessoa ${p} tem idade:`);
} if (peso > 90) {
    pessoas90 += 1;
} 
console.log (`A média de idade das 5 pessoas é de ${MediaIdade} de idade.`);
console.log (`Pessoas acima de 90kg = ${pessoas90}`)