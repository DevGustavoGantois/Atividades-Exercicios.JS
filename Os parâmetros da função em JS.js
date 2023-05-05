function funcao() {
    console.log('Oie')
}
funcao('Valor' , 1 , 2 , 3, 4, 5, 6, 7, 8 , 9, 10); //estpu envinado um argumento para suprir um valor de um parâmetro ali em cima.
//Posso enviar um milhão de valores e o JavaScript 'não estará nem aí'.
//Os argumentos irão para para uma variável chamada arguments.
//Temos uma função chamada arguments:
console.log(arguments);
//Tudo que enviarei estará dentro desses argumentos.
//Posso pegar do arguments o índice 0 que é o valor:
console.log(arguments[0]);
console.log(arguments[10]);// Vai ser o elemento 10.

//Vmaos fazer uma função que tenha o objetivo de somar todos os valores:
function somar(a, b, c) { //Para cada um desses itens eu teno um parâmetro
    let total = 0;
    for(let argumentos of arguments) {
        total += argumentos;

    }
    console.log(total, a , b , c); //Ele dará a soma de todos os números aqui.
}// argumentos que sustentam todos os argumentos enviados.
somar(1, 2, 3, 4, 5, 6, 7)
//A, B e C sustentam os valores 1 , 2 , 3
//Argumentos sustentam todos os argumentos enviados, mas só sustentam com a palavra function.
//ISSO NÃO FUNCIONA EM ARROW FUNCTION.


function coisas(a, b, c , d, e, f) {
    console.log(a, b, c , d , e , f);
}

coisas(1, 2, 3, 4, 5, 6, 7); //Ele vai exibir até o valor 6.
//Mas caso eu mandasse só até o três, como ficaria o  4 5 6? No caso dária o valor undefined.

//Suponhamos que temos uma função que some A e B:
function soma (a, b) {
    console.log(a + b);
}
soma(2); //Se mando só o valor do A vai dar undefined no B, o retorno será NaN.
//Uma maneira mais antiga de se fazer é:
function somas (a, b) {
    b = b || 0; // ele vai checkar se b tem algum valor se B tiver algum valor vai ser 0. Caso colocasse 2 no b=b || 2;, o resultado da soma séria 4. Essa é uma maneira antiga de resolver esses problemas.
    console.logo(a + b);
}
somas(2);

//Podemos colocar assim:
function somas (a, b = 2, c = 4) {
    console.log(a + b + c);
}
somas(2, 10); //Se fizermos assim ele vai assumir o valor de 2 para A de 10 para Be pra c o valor de 4 aqui.
somas(2, 10, 20); // aqui ele vai assumir, 2 pra A, 10 pra B, 20 pra C.
 //Caso enviarmos um valor nulo, por exemplo sendo uma string ele irá contatenar os valores.
 //se enviassemos 0 no valor de B, teríamos 22, ele não vai pular o valor de B.
 //A única forma que tenho como assumir o valor de B é dando o valor undefined.

 //Podemos fazer uma atribuição via desestruturação.

 function informacoes ({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
 }
 let obj = ({nome: 'Gustavo', sobrenome: 'Gantois', idade: 19});
 informacoes(obj);

 //Outra coisa que podemos fazer também através dos arrays agora:
 function valores ([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
 }
 valores(['Gustavo Gantois', 'Caria', 19]);

 function conta(operador, acumulador, numeros) {
    console.log(operador, acumulador, numeros);
 }
 conta('+', 0, [20, 30, 40, 50]); //Posso remover o array e utilizar números com o rest operator. usando os ... no numeros da function.
 //O resto estará dentro do array, então teremos exatamente a mesma coisa.
 //Vamos fazer assim:
 function conta(operador, acumulador, ...numeros) {
    for( let numero of numeros) { //Queremos os valores então usáremos of.
        console.log(numero) // A cada volta do laço vou somar um desses valores do meu acumulador
        console.log(arguments); 
    }
    console.log(acumulador);
 }

conta ('+', 0, 20, 30, 40, 50);
//Podemos fazer dessa forma.
function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador)
};
conta('+', 1, 20, 30, 40, 50)

//Se mudar para arrow function não teremos mais os arguments dentro.
