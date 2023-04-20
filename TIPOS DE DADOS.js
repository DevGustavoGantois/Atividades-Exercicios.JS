/*
Primitivos (imutáveis) - string, number, boolean, undefined, 
null (bigint, symbol) - valores copiados

Referência (mutável) - array, object, function - Passados por referência
*/

let a = [1, 2, 3];
let b = [...a];
let c = b;

//          0123456  
let nome = 'Gustavo';
nome = 'Guga';
console.log(nome);
//Não estamos trocando o dado primitivo e sim o valor da váriavel.

let a = 'A';
let b  = a; // Cópia
console.log(a, b);

 a = 'Outra coisa'; // O valor de A será alterado.
 console.log(a, b);


 /* valores que não são primitivos 

 Referência (mutável) - array, object, function

 */
let a  = [1 , 2 , 3];
let b = a;
let c = b;
//Tanto o A quanto o B apontam para a o mesmo local na memória.
console.log(a, b)
// Se eu alterar tanto o valor de A quanto o valor de B eu estarei afetando as 2 váriaveis.

a.push(4);
console.log(a);

b.pop();
console.log(b);

console.log(a,b);
a.push("Gustavo") // Se adicionarmos esse nome veremos que ele ira entrar no array, pois estamos referênciando.
console.log(c);

//OS VALORES QUE SÃO PRIMITIVOS ELES SÃO COPIADOS QUANDO PASSAMOS UTILIZANDO O SINAL DE ATRIBUIÇÃO.

//Criar um Objeto:
const pessoa = {
    nome:'Gustavo',
    sobrenome:'Gantois',
    idade:19,

}
a.nome = 'João' // O b terá o nome de João agora. Por que o b aponta o mesmo valor de A na memoria.
console.log(b)


const a = {
    nome: 'Augusto',
    sobrenome:'Carvalho'
};

const b = {...a}; //espalharemos o valor de A dessa forma = {...a}

//Se fizer dessa forma os 2 valores serão alterados:
const b = a;
//Os dois apontam pro mesmo local.


//MAIOR DIFERENÇA:
//Os valores primitivos são copiados. TODAS AS VÁRIAVEIS QUE EU USAR = SERÃO INDEPENDENTES, NENHUMA DEPENDERÁ UMA DA OUTRA.
//E os valores por referência se eu utilizar o sinal de igual utilizando os tipos de dados , a gente não estará fazendo uma copia, mas estamos fazendo a variável
// que ta recebendo o valor, apontar para o mesmo local na memória.