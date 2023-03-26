let NomeProduto = 'lapis'
let precoProduto = 1400
let etiquetaVerde = precoProduto * (10/100)
let etiquetaAmarela = precoProduto * (20/100)
let etiquetaAzul = precoProduto * (30/100)
let etiquetaVermelha = precoProduto * (40/100)  
let clienteEscolhe = 'etiqueta azul'
if(clienteEscolhe == "etiqueta verde"){
    Preco_desconto = `${precoProduto - etiquetaVerde}` 
        console.log( ` O produto é um ${NomeProduto} o valor do ${NomeProduto} é ${precoProduto} e esse valor com desconto da etiqueta verde é = ${Preco_desconto}`)
} else if (clienteEscolhe == "etiqueta amarelo"){
     Preco_desconto = `${precoProduto - etiquetaAzul}`
       console.log(`O produto é um ${NomeProduto} o valor do ${NomeProduto} é ${precoProduto} e esse valor com desconto da eitqueta azul é = ${Preco_desconto}`)
} else if (clienteEscolhe == "eitqueta azul"){
     Preco_desconto = `${precoProduto - etiquetaAmarela}`
       console.log(`O produto é um ${NomeProduto} o valor do ${NomeProduto} é ${precoProduto} e esse valor com desconto da etiqueta amarela é = ${Preco_desconto}`)
} else if (clienteEscolhe == "etiqueta vermelho") {
    Preco_desconto = `${precoProduto - etiquetaVermelha}`
}      console.log(`O produto é um ${NomeProduto} o valor de ${NomeProduto} é ${precoProduto} e esse valor com desconto da etiqueta vermelha é = ${Preco_desconto}`)


//let valor = 1500
//let desconto1 = valor * 20 / 100
//let desconto2 = valor * 30 / 100
//let escolha = "produto verde"

//if(escolha === "produto verde"){
    //let valorDesconto = valor - desconto1
    //console.log( valor do produto1: ${valorDesconto})
//}else
    //if(escolha === "produto azivis"){
        //let valorDesconto = valor - desconto2
        //console.log( valor do produto2: ${valorDesconto})
    //}

    //Não sei o motivo do erro ??? fiz no outro PC do mesmo jeito e deu certo. Vai a resposta certa como comentário e a "errada a cima!"