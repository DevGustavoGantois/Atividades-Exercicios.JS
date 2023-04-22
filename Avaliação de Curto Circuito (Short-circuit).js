/*
&& --> false && true -> false "o valor mesmo."
|| --> true && false -> vai retornar "o valor verdadeiro."

FALSY.VALUES --> o resto é tudo FALSY tirando o "false, que é literal." 
* false --> Esse é literal 
0
'' "" ``
null / undefined --> Não aponta pra lugar nenhum
NaN (NOT A NUMBER)
*/
console.log("Hélio" && 0 && "Maria");
console.log('Hélio' && true && NaN); //Iria me retornar NaN, false

console.log('Luiz' && 'Maria'); // Não terá avaliação de curto circuito, porque não tem valor falso aqui.

console.log('Luiz' && '' && 'Maria'); // Ele irá checkar o nome Luiz, passar pelo próximo, isso '' é verdadeiro? -> não (false). No final retornará falso.

function falaOi () {

    return 'Oi';
}

let vaiExecutar = false;

console.log(vaiExecutar && falaOi()); //Se essa variável for falsa, vai exibir false literal na tela
// Se a variável false fosse undefined, iria retornar undefined. Veremos undefined na tela, pois é uma variável que não tem valor.

let vaiExecutar = 'Joãozinho'; // Ele irá executar a função e continuar.

//USANDO O OR --> ||
console.log(0 || false || null || 'Gustavo Gantois' || true) //Esse console.log vai exibir um desses valores.
//Porque o OR precisa apenas de uma expressão verdadeira para que ele retorne o valor verdadeiro.

const corUsuario = null;
const corPadrao = 'red'

//Posso fazer estruturas lógicas tanto usando o operador and --> && ou o OR --> ||

const a = 0;
const b = null;
const c = 'false'; // Aqui --> valor literal.
const d = false; // Esse é p valor real de false
const e = NaN;

console.log( a || b || c || d || e)

//Temos o último valor false avaliado
//Quando todas forem avaliadas em false, a ultima falsa será retornada, e aí o valor real da ultima falsa será retornada.

//Caso tivesse 'Joãozinho' ali no meio o valor será verdadeiro, somente ele será retornado no console.log.