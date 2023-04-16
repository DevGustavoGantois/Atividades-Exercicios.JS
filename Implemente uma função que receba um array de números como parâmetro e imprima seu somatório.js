function Array(VariosNumeros) {
    let total = 0
    for(var i = 0; i < VariosNumeros.length; i++) {
        total += VariosNumeros[i]
    }

console.log(total)
} 

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log("A soma dos números dentro do Array é:")
Array(numeros)



//Criei uma Function Array, dentro da Function Array botei uma váriavel 'VariosNumeros'.
//Criei uma let total com o valor da flag 0. 
//Criei um FOR com var i que vai ser = 0, se i for menor do que 'VariosNumeros.length', usei o length para contar todas os elementos do array 1 de cada vez com i++ para contar +1 cada vez.
//Usei a var total para somar junto a váriavel 'VariosNumeros[i]'.
//Console.log(total) para exibir a var total.
//Criei uma Let numeros com vários números aleatórios dentro.
//Usei o console.log para explicar.
//Chamei a função 'Array' com os números, para mostrar a soma dos mesmos.



