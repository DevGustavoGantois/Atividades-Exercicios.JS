//            0123...
const nomes = 'Gustavo Gantois';

for(let i = 0; i < nomes.length; i++) { // For normal para contar
    console.log(nomes[i]);
}

//Nos 2 fors precisamos utilizar o índice:
for(let i in nomes) {   //Vai te retornar o índice.
    console.log(nomes[i]); // For com in vai pegar os Objetos.
}

//For of --> Quando tenho um objeto interável que é o caso de uma string ou um array ou vetor ou matriz podemos fazer assim:

for (let valor of nomes ) { //Agora não vai vir o índice. Irá vir o valor em si.
    console.log(valor); // não tem índice. Ele lê cada índice e pega o valor
}

//Podemos usar com arrays:

const nome1s = ['Gustavo', 'Augusto', 'Nayra', 'José'];

nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});

//Cada for é bom para um tipo de caso.
//Para arrays qualquer 1 dos 3 irá servir.
//para o objetos o FOR OF não é iterável, então não conseguimos utilizar FOR OF

const pessoa = { // o FOR CLÁSSICO não iria funcionar neste momento, caso usassemos ele para iterar.
    nome: 'Gustavo',
    sobrenome: 'Gantois' 
};
// Nesse caso o FOR IN irá funcionar.
for (let chave in pessoa) {
    console.log(chave, pessoa[chave]); // é iterável.
}

//FOR OF não será iterável.
for(let valor of pessoa) {

}

//For clássico - Geralmente com iteráveis (array ou strings.)
//For in - Retorna o índice ou chave (string, array ou objetos.)
//For of = Retorna o valor em si (iteráveis, arrays ou strings.)
