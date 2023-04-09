let numeros = [10, 15, 17, 22, 9, 4]
//Criando o contador.
let contador = 0;

for (let i = 0; i < numeros.length; i++) {
    //Verificando se o número é par ou impar
    if (numeros[i] % 2 == 0) {
        //Incrementando o contador caso seja par.
        contador++;
    }
}

console.log(`Tem ${contador} numeros pares.`);