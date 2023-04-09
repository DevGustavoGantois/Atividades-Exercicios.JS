function calcMedia(n1, n2, n3) {
    // Criando o array com as notas
    let notas = [n1, n2, n3];
    // Alterando o valor do segundo item.
    notas[2] = notas[2] / 2;
    //Calculando a média a partir dos indices.
    let media = (notas[0] + notas[1] + notas[2]) / 3
    console.log(media);
}

//Chamando a função
calcMedia(6, 5, 7)