const string = (Palavra) => {

    return Palavra.split('').reverse('').join('');
}

console.log('A palavra: Eu amo muito minha mãe ->')

console.log(string('Eu amo muito minha mãe'))

//Usei uma arrow Function 
//Criei uma const string que vai ser igual a "Palavra" que será chamada no final do código.
//Retornei a chamada palavra, usei a utilidade split para separar a string "Palavra".
//Usei a utilidade "reverse" para reverter a string.
//Usei a utilidade "Join" para juntar as palavras com o reverse novamente.
//Mostrei o resultado com console.log