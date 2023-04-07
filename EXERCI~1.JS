const cores  = ["Vermelho", "Verde", "Azul", "Laranja", "Branco"]
const clientes = "Azul"
const pesquisa = cores.find(pesquisa => pesquisa === clientes)

if(pesquisa){
    console.log(`Tem a cor ${clientes}`)
} else {
    console.log(`Não tem a cor.`)
}