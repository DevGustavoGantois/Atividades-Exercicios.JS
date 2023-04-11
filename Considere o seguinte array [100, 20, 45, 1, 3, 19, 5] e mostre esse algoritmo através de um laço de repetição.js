//Criei um array com os números
let array = [100, 20, 45, 1, 3, 19, 5];
//Criei uma função LetArray
function LetArray () {
//Criei um laço repetição FOR com i de inicio e o array.lenght é para contar todos os números dentro do let array. 
    for (var i = 0; i < array.length; i++) {
       console.log(array[i]);
       
    }
}
//Botei a função LetArray() com o array "array" dentro da função para mostrar os números do array sem ser em forma de lista.
LetArray(array);