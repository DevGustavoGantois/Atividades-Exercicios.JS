const removeVogais = (str) => {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let novaStr = '';
    for (let i = 0; i < str.length; i++) {
      if (!vogais.includes(str[i].toLowerCase())) {
        novaStr += str[i];
      }
    }
    return novaStr;
  }

  const minhaStr = 'Eu gosto muito de cachorros.';
const novaStr = removeVogais(minhaStr);
console.log("A palavra é Eu gosto muito de cachorros e ela sem as vogais ficará:");
console.log(novaStr); 

//Criei uma arrow function.
//A constante removeVogais recebe um parâmetro chamado str, que representa a string a ser modificada.
//Em seguida, é criada uma constante chamada vogais, que contém as vogais que serão removidas da string.
//Uma variável chamada novaStr é criada, que inicialmente é igual a uma string vazia.
//Um loop for é usado para percorrer a string original. A cada iteração, o caractere atual é verificado para ver se é uma vogal. Se não for uma vogal, o caractere é adicionado à variável novaStr.
//Por fim, a função retorna a nova string sem as vogais.