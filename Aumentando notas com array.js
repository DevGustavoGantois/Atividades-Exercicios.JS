let notas = [5.5, 6, 4.3, 7, 3.2, 8.2];

for (var i = 0; i < notas.length; i++) {
    if (notas[i] < 6) {
        notas[i] = notas[1] + 1;
    }
}

console.log(notas);