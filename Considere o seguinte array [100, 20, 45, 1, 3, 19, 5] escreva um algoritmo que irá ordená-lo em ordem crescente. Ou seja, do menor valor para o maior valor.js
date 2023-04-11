//Criando um array com 7 números.
let array = [100, 20, 45, 1, 3, 19, 5];
// Criando um função OrdenarArray
function OrdenarArray (arr) {
//Criando uma let tempo
let temp;

for (let i = 0; i < arr.length; i++) {
//Criando um for para para contar todos os números do array com o array.length
    for (let j = i + 1; j < arr.length- i - 1 ; j++) {
//Criei um for juntando com o outro for de cima.
        if (arr[i] > arr[j + 1]) {
            temp = arr[i];
            arr[i] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
}
//Console.log para mostrar o array
console.log(array);
//Mostrando a função com o array dentro mostrando os números.
OrdenarArray(array);

