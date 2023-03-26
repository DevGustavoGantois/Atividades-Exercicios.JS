function analisar(){
    var n1 = window.document.getElementById('n1')
    var n2 = window.document.getElementById('n2')
    var res = window.document.getElementById('res')
    let numero1 =  Number(n1.value)
    let numero2 = Number(n2.value)
    if(numero1 == 0 || numero2 == 0 ){
        window.alert('[ERROR] Por favor, preencha a lacuna abaixo ')
    } else if (n1 < n2) {
        res.innerHTML = (`O valor 1 é = ${numero1} e é menor que o valor 2 =  ${numero2}`)
    } else {
        res.innerHTML = (`O primeiro valor 1 é = ${numero1} e é maior que o valor 2 = ${numero2} `)
    }
}