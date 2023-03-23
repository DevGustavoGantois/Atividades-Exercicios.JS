function verificar(){
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length <= 0 || fano.value > ano){
        window.alert('erro')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 12){
                //criança
                img.setAttribute('src','menino criança.jpg' )
            }else if(idade < 25){
                //jovem
                img.setAttribute('src','homem jovem.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','homem adulta.jpg')
            }else{
                //idoso
                img.setAttribute('src','homem idoso.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 12){
                //criança
                img.setAttribute('src','menina criança.jpg' )
            }else if(idade < 25){
                //jovem
                img.setAttribute('src','jovem mulher.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','mulher adulta.jpg')
            }else{
                //idoso
                img.setAttribute('src','idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.style.textAlign = 'center'
        img.style.margin = '20px'
        res.appendChild(img)
    }
}