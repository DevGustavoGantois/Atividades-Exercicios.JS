var numero = 1
var divisores = 0


for (var count= 1; count <= numero; count++) {
    if (numero % count == 0) {
        divisores++
    } if (divisores == 2) {
        console.log(`${count} é primo.`)
    } else {
        console.log(`${count} não é primo.`)
    }
} 
