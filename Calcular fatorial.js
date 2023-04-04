const numero = Number(prompt(`Digite um valor:`))
let resultado = 1;

for (let i = 1; i <= numero; i++) {
    resultado *= i;
}

console.log(resultado);