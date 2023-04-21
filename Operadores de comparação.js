/*
Operadores de comparação
> maior que 
>= maior que ou igual a  VAI RETORNAR VERDADEIRO.
< menor que
<= menor que ou igual a
== igualdade  (valor) ** NÃO IREMOS UTILIZAR ESTE.
==== igualdade estrita (valor e tipo)
!= diferente (valor) NÃO IREMOS UTILIZAR ESTE.
!== diferente estrito (valor e tipo)
*/
console.log(10 > 5); // aqui vai checkar de forma Boolean (comparação, se o valor realmente for maior retorna "true" se não "false")


const comparação = 10 > 5;
console.log(comparação); 

const comparação1 = 10 >= 5;
console.log(comparação1); // vai retornar verdadeiro, pois uma delas deu verdadeiro.

const comparação2 = 10 >= 10
console.log(comparação2); // vai retornar verdadeiro também.

const comparação3 = 10 >= 11
console.log(comparação3); // vai retornar falso 

const comparação4 = 10 < 11 // vai retornar verdadeiro, pois 10 é menor do que 11.
console.log(comparação4)

const comparação5 = 10 <= 11 
console.log(comparação5) // vai retornar verdadeiro, pois 10 é menor que 11.

//Podemos atribuir variáveis a esses valores e comparar também.

//Não utilize esse sinal ==, exemplo:

const num1 = 10;
const num2 = '10';
const comp = num1 == num2;
console.log(comp);
// não é interessante pois ele converte um tipo em outro. Caso utilizarmos 2 sinais de igual ele fará uma dedução do que queremos fazer, e não é muito legal
//pois pode gerar um efeito colateral em seu código
// Caso queira fazer conta com números, converta tudo para números e assim por diante.

//desta forma estará correta:
const comp1 = num1 === num2;
//Agora ele falará que os dois valores são diferentes, pois realmente são diferentes 1 é STRING e o outro é NUMBER.


// != checka diferença, mas não checka o tipo, checka só o valor.
// !== checka diferença do valor e tipo, USE ESTE.