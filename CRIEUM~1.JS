let cores = ["Vermelho", "Azul", "Amarelo", "Preto", "Branco"]

var resp = 0
let clientes =  "Vermelho"

for (let count = 0; count <cores.length; count++) {
    if ( clientes == cores[count] ) {
        resp += 1
    }
}


if(resp == 1) {
    console.log(`Achou a cor ${cores}`)
} else {
    console.log(`Não achou a cor ${cores}`)
}
