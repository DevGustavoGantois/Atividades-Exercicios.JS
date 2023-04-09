const lista = []

const aplication = () => {
    const btn = document.querySelector("#btn")

    btn.addEventListener("click", () => {
        const dados = document.querySelector(".dados").value
        const tabela = document.querySelector(".tabela")
        lista.push(dados)

        const item = document.createElement("option")
        lista.forEach(element => {
            item.text= element
        })
        tabela.appendChild(item)
    })
}
aplication()