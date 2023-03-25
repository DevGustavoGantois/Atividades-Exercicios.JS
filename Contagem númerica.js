function contar() {
    let ContIni = document.getElementById('ContIni')
    let ContFim = document.getElementById('ContFim')
    let ContPass = document.getElementById('ContPass')
    let res = document.getElementById('res')
    
    if(ContIni.value.length == 0 || ContFim.value.length == 0 || ContPass.value.length == 0){ 
        window.alert('[ERROR] Faltam dados!')
        res.innerHTML = 'Impossivel contar!'
    }else {
        res.innerHTML = 'Contando: <br>' 
        let i = Number(ContIni.value)
        let f = Number(ContFim.value)
        let p = Number(ContPass.value)
        if(p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i< f) {
            //Contagem crescente
            for(let c = i; c<= f; c+= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //Contagem regressiva.
            for (let c = i; c <= f; c-= p )
            res.innerHTML += `${c} \u{1F449}`
        }
            res.innerHTML += `${c} \u{1F596}`
        
    }   
}