function contar() {
    var valor = document.getElementById("valor")
    var res = document.getElementById("resposta")
    let v = Number(valor.value)
    if (v === 0) {
        window.alert(`[ERROR] Você esqueceu de digitar um número.`)

    } else if (v % 2 == 0) {
        for(var c = 0; c <= v; c++ ) {
            window.prompt(`Contando -> ${c++}`)
        }
    } else if ( v % 2 == 1) {
        for (var c = 0 ; c <= v; c++) {
            window.prompt(`Contar -> ${c++}`)
        }
    }
}