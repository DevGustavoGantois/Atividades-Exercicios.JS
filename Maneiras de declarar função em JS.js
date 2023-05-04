//Declaração de função: (function hoisting) a indíne do JavaScript vai elevar as declarações de funções e variaves definidas com a palavra var, para o topo do nosso arquivo JavaScript.
function FalaOi () { //Só executa essa função.
    console.log('Oii');
}
//Isso significa que eu posso tanto chamar essa função dessa maneira:
function falaOi() {
    console.log('Oii')
}
falaOi();

//E também posso criar a função antes de chamar ela:

FalaOi();


function FalaOi() {
    console.log('Oi')
}
//De todos os jeitos nesse caso irá oorrer o hoisting.
//Podemos retornar um valor caso quisessemos. Como essas funções não tem um valor, não iremos retornar.


//As funções são first-Class Objects (Objetos de primeira classe.)
//Podemos tratar as funções como dado.
//Expresão de função seria isso:
const SouUmDado = function () { // Estou jogando uma função como resultado de uma constante. Ela recebe uma função como dado.
    //Posso executar essa váriavel como uma função normal, pois ela recebeu essa função.

    console.log('Sou um dado.')
}
SouUmDado(); //Isso é muito bom, pois eu posso jogar a variável como parâmetro de outra função e fazer essa outra função executar a minha função.

function executaFuncao(funcao) { //To esperando receber uma função no parâmetro, e ai dentro eu faço funcao e executo este parâmetro.
    funcao();

}
//Parâmetro é como se fosse uma variável que irei receber na função.
executaFuncao(SouUmDado) //Agora o executa função vai executar a outra função --> SouUmDado
//Ele chamou a função, passando essa função para a outra função e ele executou ela normalmente.
//Por isso que dizemos que a função em JavaScript é um objeto de primeira classe (first-Class Object).


//Arrow Function será uma Function Express, porém bem mais curta:
const funcaoArrow = () => {
    console.log('Sou uma Arrow Function.')
};
funcaoArrow();

//Todas as funcções são tratadas como dado.
//Todas essas 3 funções fazem uma mesma coisa, executar uma tarefa.
//as funções que usam a palavra function vão divergir um pouco da arrow function na palavra this.

setInterval(function(){

}, 1000); //Nos estamos tratando essa função como um dado, porque estamos passando a função como parâmetero para outra função no setInterval.
//Poderiamos passar a função como um dado pra assim:
setInterval(afuncao, 1000);
//Funcionária normalmente   

//Podemos nomear a função também, mas não veremos tanto códgio com a function expression dessa forma, mas funciona também
//Como jogamos a função sem nome e uma váriavel a váriavel se tornou a função com o nome que é o nome da propria váriavel.
const SouAlgumaCoisa = function nomeDaFuncao () {

}

// Dentro de um Objeto 
const objeto = {
  falar: function () {
    console.log('Estou falando')
  }          //No atributo de um objeto posso criar uma função.
};
objeto.falar(); //Essa é a maneira clássica de jogar uma função como um método de um objeto.
//Posso usar a anotação de ponto para executar uma função, que está dentro do meu objeto.
//Podemos criar esse método sem a palavra function e sem os : 
//A função falar já será um método dentro de um objeto.