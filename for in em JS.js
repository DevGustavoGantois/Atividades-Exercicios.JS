// For in -> lê os índices ou chaves do objeto
const pessoa = {
    nome: 'Gustavo',
    sobrenome: 'Gantois',
    idade: 19
};

for(let chave in pessoa) {
    console.log(chave, pessoa[chave]);
};
//Caso queira acessar o nome da pessoa irei fazer:
const chave = 'nome';
console.log(pessoa[chave]); // Isso é muito util quando nçao sabemos qual propriedade iremos pegar. Caso formos pegar essa properidade de forma dinâmica dentro do nosso sistema/site.
//                 0        1      2
const frutas =  ['Pera', 'Maça', 'Uva'];

for(let index in frutas) {
    console.log(frutas[index]); // Analisa a quantidade de objetos que está dentro do Array, ou Objeto...
}

// for(let i = 0; i < frutas.length; i++) {
//    console.log(frutas[i]);
//}