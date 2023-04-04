function Tabuada() {
    var num = document.getElementById("numero")
    var res = document.getElementById("resposta")
    var tabuada = ''

    let n = Number(num.value)


    if(n === 0 ) {
        window.alert("[ERROR] Por favor digite um número...")
    } else {
        for (var c = 1; c <= 10 ; c++) {
        tabuada += n + "x" +c+ "=" +
        n * c + "<br/>";
         res.innerHTML = tabuada
        }
    }

}
