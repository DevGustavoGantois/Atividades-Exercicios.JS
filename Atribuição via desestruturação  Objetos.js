const pessoa = {
    nome: 'Gustavo' ,
    sobrenome: 'Gantois',
    idade: 19,
    endereço: {      //Dentro de um objeto irei fazer outro objeto.
        rua: 'Cajazeiras',
        numero: 2
    }
};


const nome = pessoa.nome;
console.log(nome);

//Suponhamos que vamos pegar o nome da pessoa:
// podemos utilizar pessoa.nome para fazer isso.


//Para fazer as atribuições via desestruturação podemos utilizar as chaves.

const { nome } = pessoa;
console.log(nome);

//Se chama de desestruturação porque estamos passando pelo objeto e extraindo a chave nome. 
//E com isso já criamos a variável

//Podemos pegar quantas chaves quisermos.

const { nome, sobrenome, idade} = pessoa;
console.log(nome, sobrenome); //Desestruturação de 3 variáveis.

//Podemos setar o valor para nome por exemplo, em vez de dar undefined, dar essa variável:

const {nome = '', sobrenome } = pessoa;
console.log(nome, sobrenome) // isso funciona com arrays também

//Podemos modificar o nome da nossa variável quando quisermos que a nossa variável não se chame 'nome' por exemplo.
//Podemos fazer dessa forma:
const {nome: n = '', sobrenome } = pessoa;
console.log(n, sobrenome)

//Caso você use react você vai usar isso em vários lugares e bibliotecas diferentes.


//Se pegarmos o endereço

const { nome, sobrenome, endereço } = pessoa;
console.log(endereço); // Nesse endereço irá vir o objeto que está dentro -> a Rua e o número dela.

//Podemos selecionar quem queremos no endereço somente:

const {endereço: {rua, numero}} = pessoa;
console.log(endereço); // Agora n temos mais a variável endereço mais. Só temos rua e número


//Se eu quisesse pegar o endereço completo, posso botar uma virgúla.
const {endereço: {rua, numero}, endereço} = pessoa;
console.log(rua, numero, endereço)

//Podemos fazer com que a Rua seja atribuida a variável r:

const { endereço: {rua: r = 12345, numero }
, endereço
} = pessoa;
console.log(r, numero, endereço);
// Se a variável r não existisse teriamos o valor 12345 porque foi o valor padrão que colocamos.

//Podemos usar o operador de rest:

const {nome, ...resto} = pessoa;
console.log(resto); // Teremos tudo nesse console.log menos o nome 
