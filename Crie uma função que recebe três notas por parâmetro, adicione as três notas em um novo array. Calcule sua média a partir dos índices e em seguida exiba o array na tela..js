function TresNotas (nota1, nota2, nota3) {
// Criando o array com as notas
    let notas = [nota1, nota2, nota3]
    //Calculando a média a partir dos índices.
    let media = (notas[0] + notas[1] + notas[2]) / 3
    console.log(media)
}
//Chamando a função.
console.log("A média de notas é igual a ")
TresNotas(6, 4, 8)
 
