 function Letras (Palavra) {
    const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let NovaPalavra = '';
    for(let i = 0; i < Palavra.length; i++) {
        if (!vogais.includes(Palavra[i])) {
            NovaPalavra += Palavra[i];
        }
    }
    return NovaPalavra;
}

console.log('A palavra é Bolo de Cenoura, e se tirar as vogais ela ficará:')
console.log(Letras('Bolo de Cenoura'))

//A constante chamada vogais, que contém todas as vogais com letras maiúsculas e minúsculas.
// A váriavel nova chamada 'NovaPalavra' é criada inicialmente com uma string vazia.
//Um loop for é usado para percorrer a palavra original. A cada iteração, o caractere atual é verificado para ver se é uma vogal. Se não for uma vogal, o caractere é adicionado à variável novaPalavra.
//E o resultado é a função retornar a palavra sem vogais.