//Crie uma lista de compras com 3 itens em um array e depois execute as seguintes
//operações:

// -- Incluir mais 2 itens na lista de compras.
// -- Retirar um item da lista de compras.
// --Substituir um item na lista de compras.
let compras = ["Lapis", "Mochila", "Estojo"];

compras[3] = "Mesa"
compras.push("Teclado");

let retirar = compras.shift();

console.log(compras)