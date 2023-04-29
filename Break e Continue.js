const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for(let numero of numeros){  // Se eu quiser interar o array posso utilizar o for of que será o mais fácil.
    //Caso não queira que algum número seja exibido na tela, eu posso utilizar a palavra continue.
    if(numero === 2 /*podemos fazer o  || ou um outro if.*/ || numero === 5 ) {
        continue; //O continue vai voltar pro começo do laço já na proxima iteração.
    }//Na hora que ele chegar no 2 vai checkar a condição ela será verdadeira, porque o número será igual a 2. Ele pulará para a proxima iteração do laço sem executar o restante do código que está abaixo do continue, ele irá voltar.

    if (numero === 5 ) {
        continue;
    }
    if (numero === 7 ) {
        console.log('7 encontrado, saindo...');
        break;
    //A palavra break pode poupar recursos do servidor ou do cliente, ela pode melhorar a velocidade do teu código.
    //A palavra break; sai do bloco.
    }

    console.log(numero); //Caso executassemos ele iria pular o número 2.
}

//Com continue; ele vai até o final, porem pula a interação que é pedida pelo código.
//Com o break; a primeira vez que ele encontrar a palabra ele encerrará o laço.

for ( let i in numeros) {
    let numero = numeros[i];
}

//FOR CLÁSSICO:
for (let i = 0; i < numeros.length; i++) {
let numero = numeros[i];
}

//COM WHILE:
let i = 0;
while(i < numeros.length ) {
    let numero = numeros[i]; // Temos que copiar e atualizar a variável de controle e colocar antes da palavra continue; ou da break; no seu código.
    break;
}