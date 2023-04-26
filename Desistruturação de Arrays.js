let a = 'A' // B
let b = 'B'// C
let c = 'C'// A

const letras = ['A', 'B', 'C'];
[a, b, c] = letras;

console.log(a, b, c);

//               0  1  2  3  4  5  6  7  8
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

const primeiroNumero = numeros[0];

console.log(primeiroNumero)

console.log(numeros[0]); //Vai exibir o número 1.

//Podemos arrancar coisas do Array e jogar em uma váriavel utilizando sintaxes.

const [um, dois, tres, ...resto] = numeros; // Sempre posso pegar o resto.
console.log(um, dois, tres);
console.log(resto); // O operador se chama resto. (RestOperator)

//Esse operador ---> ... quando usamos nesse sentido de pegar o resto de alguma coisa, ele chama REST OPERATOR, quando ele é usado no sentido de espalhar alguma coisa ele se chama SPREAD OPERATOR.

//Para pular os elementos de um array podemos utilizar um valor vázio:

const [um, , tres , , cinco, , sete]
console.log(um, tres, cinco);
//Uma outra coisa que podemos fazer para uma atribuição via desistruturação;

//Suponhamos que tenhamos um array e dentro do array, temos outros arrays:

const numeros1 = [    //temos uma lista dentro de outra lista.
//                 0  1  2
    /*Indice 0 */ [1, 2, 3],
//               0  1  2
    /*Indice 1*/[4, 5, 6],
//               0  1  2 
    /*Indice 2*/[7, 8, 9]
];
//Caso quisessemos mostraro 6 do inidice 2 ficaria dessa forma.
console.log(numeros[1][2]);

//Para acessarmos o cinco, faremos:


const [, [, , seis]] = numeros1;
console.log(seis);
//Dessa forma pegamos o número 6 igual o exemplo anterior.

//Dessa forma em minha opnião acho que ficaria mais fácil:
const[lista1, lista2, lista3] = numeros1;
console.log(lista3[2]);

