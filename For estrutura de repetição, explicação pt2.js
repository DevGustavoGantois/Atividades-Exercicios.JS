//console.log('Linha 0');
//console.log('Linha 1');
//console.log('Linha 2');
//console.log('Linha 3');
//console.log('Linha 4');
//console.log('Linha 5');

// i - index      //500 --> ele iria executar de 0 até 500 linhas.
for(let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`); // Vai contar de 0 até 5. 
}  //Teremos exatamente o mesmo resultado de cima.

//Caso queiramos saber os números pares de 0 a 10 com a estrutura de repetição for.
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par)
}
//Percorrer um array com for.
//                 0        1       2
 const frutas = ['Maçã', 'Pêra', 'Uva' ];

 for (let i = 0; i < frutas.length; i++) {
    console.log( `Índice ${i}` , frutas[i]) // Vai exibir o valor e as frutas
 }