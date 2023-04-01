function ComeçarContagem () {
    var valor = document.getElementById("valor");
    var resposta = document.getElementById("res");

    let v = Number(valor.value);
    for (let divisor = 2; divisor <= valor; divisor++) {
        let ehPrimo = true;


        for(let divisor = 2; divisor < v; divisor++) {
            if (v % divisor === 0) {
                ehPrimo = false;
                break
            }
    }
          if(ehPrimo) resposta.innerHTML = `${v}`
}
}