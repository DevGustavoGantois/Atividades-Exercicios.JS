//Usei a função Math para importar o valor máximo e o mínimo dentro do array numeros.
function MaxMin(numeros) {
    let maximo = Math.max(numeros);
    let minimo = Math.min(numeros);
    return (minimo, maximo);
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let resultado = MaxMin(numeros)
console.log(`O resultado máximo vai ser ${numeros.maximo}`)
console.log(`O resultado mínimo vai ser ${numeros.minimo}`) 

