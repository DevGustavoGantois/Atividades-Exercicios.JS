function Analisar() {
    var idades = document.getElementById("idades")
    var Programadores = document.getElementById("Programador")
    var resposta = document.getElementById("res")

    let i = Number(idades.value)


    if(i === 21 &&  Programadores.value === 'Sim') {
        resposta.innerText = `Sou Programador e tenho 21 anos.`
    } else if (i > 21 && Programadores.value == 'Sim') {
        resposta.innerText= `Sou Programador e tenho mais de 21 anos.`
    } else if (i < 21 && Programadores.value == 'Sim') {
        resposta.innerText = `Sou Programador e tenho menos de 21 anos.`
    } else if (i > 21 && Programadores.value == 'Não') {
        resposta.innerText = `Não sou Programador e tenho mais de 21 anos.`
    } else if (i < 21 && Programadores.value =='Não' ) {
        resposta.innerText = `Não sou Programador e tenho menos de 21 anos.`
    }   
    
} 