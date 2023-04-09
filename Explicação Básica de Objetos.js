let amigo = {}

console.log(typeof amigo)

//Caso mostre o Amigo como um objeto ele vai classificar como Objeto.

let amigo = []

console.log(typeof amigo)
//Caso ele mostre o Amigo como um array ele também irá classificar como Objeto.

//Em JavaScript o Array é um Objeto e um Objeto é um Objeto.
//São estruturas da mesma classe

let amigo = {nome: 'Jose', sexo: 'M', peso: 85.4,
engordar(p=0) {
    console.log('Engordou')
    this.peso += p
//THIS é uma palavra alto referência ao objeto.
}
}

console.log(amigo)


//O engordar será uma função que eu poderei escrever dentro do meu código

//Caso mostre somente:
console.log(amigo.nome)
//Ele irá mostrar dentro das chaves do Objeto só o nome que é José.

//Posso mostra dessa forma também:
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)


//O amigo engordar caso eu bote antes do console.log ele irá aumentar o peso 2kg, mostrando
//Engordou
//José pesa 87.4kg.

//Fiz com que a propria variável amigo tenha uma/umas função/funções dentro dela!!
//Isso traz um leque de possibilidades gigantesco para os nossos códigos.
//Colocar funções dentro de variáveis.