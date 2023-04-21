/*
Operadores Lógicos 
&& -> AND -> E ----> TODAS AS EXPRESSÕES PRECISAM SER VERDADEIRAS.
|| -> OR -> OU
! -> NOT -> NÃO
*/

const expressaoAnd = true && true && true; // vai dar true, pois todas são verdadeiras
const expressaoOr = false || true || false || false; // vai dar true, pois se uma opção retornar verdadeira, todas são verdadeiras, caso todas retorne falso, todas as opções são falsas.



//EXEMPLOS: 
const usuario = 'Luiz'; //form usuário digitou.
const senha = '123456'; //form usuário digitou.
//                       True              false
const vaiLogar = usuario ==='Luiz' && senha ==='12345'; 
console.log(vaiLogar); // se usasse o OR --> || o usuário logaria apenas com um dos valores.
                       // Se usasse o AND --> && o usuário não iria logar, pois os dois não são verdadeiros, somente um é. 

// NOT ---> INVERTE UMA EXPRESSÃO. Se eu fizer isso:
console.log(!false); //Estarei negando o false, e virará TRUE.
console.log(false); //Estarei dando True no false, então será false.

//SE EU FIZER ISSO:
console.log(!!true); //Estarei negando o true e ele virá false, mas como tem 2 exclamações ele negará o false e retornará TRUE novamente.
