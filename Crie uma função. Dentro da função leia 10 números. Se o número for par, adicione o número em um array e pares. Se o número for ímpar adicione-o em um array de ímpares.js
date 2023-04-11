//Criando uma função LetNúmeros.
function LetNumeros() {
    let pares = [];
    //Criando uma função par
    let impares = [];
    //Criando uma função impar.
    for (let i = 0; i < 10; i++) {
    //Criando um laço de repetição for até 10 números.
        let numero = (Number(prompt("Digite um Número:")))
    //O number(prompt("Digite um Número ")) está pedindo pra o usuário digitar o número.

        if (numero % 2 == 0) {
    // O if Número quer dizer que o número que for divisivel por 2 e der 0, ele será par.
            pares.push(numero);
        } else {
    //Caso o contrario Impar.
            impares.push(numero);
        }
        
}
console.log(pares);
//dando o console.log para exibir os números pares.
console.log(impares);
// dando o console.log para exibir os números ímpares.
}
LetNumeros();
//Let números fora, para exibir a função números que está lá em cima