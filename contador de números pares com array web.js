//Criando uma let com o nome lista que será igual uma lista.
    //bote todas essas funções fora da lista da FUNCTION ENVIAR(), pois serão variáveis GLOBAIS!
    let lista = [];
    let n;
    let resposta = document.getElementById("resp")

    function enviar() {
    //Criei uma função enviar

        //Criei duas funções específicas para a FUNCTION ENVIAR()
        let numeros = document.getElementById("numeros")
        let caixa = document.getElementById("caixa")

        //Atribui n como NUMBER numeros.value
        n = Number(numeros.value)

        //Criei uma Estrutura CONCIDICIONAL IF para caso o número for par, o divisor for IGUAL a 0, todas os comandos dentro dele serão executados.
        if (n % 2 == 0) {
            //Lista.Push para botar os n de (numeros.value) dentro da let LISTA.
            lista.push(n)
            //Caixa InnerHTML para= '' para fazer com que as informações que o usuário digitar não se repitam.
            caixa.innerHTML = ''
            //Criei uma estrutura ForEach, para não criar uma estrutura de repetição comum FOR
            lista.forEach(element => {
                //Dentro do lista.forEach criei um ELEMENT. Element armazenará o const item.
                  const item = document.createElement("option")
                //const item terá um create element para criar um elemento option DENTRO DA let CAIXA.
                  item.text = `Esse número é ${element} par.`  
                // item.text para mostrar a resposta dos números pares.
                  caixa.appendChild(item)
                //AppendChild em caixa para adicionar os "ITEM" será o filho de caixa para adicionar novos itens a LISTA.
            })

        } else {
        //Estrutura SENÃO para caso o número não for par ou seja, se for n % 2 == 1 será impar.
            window.alert("Esse número é impar, não é possivel contabiliza-lo nessa lista")
        //window.alert para caso o usuário digitar um número IMPAR aparecer um aviso escrito na tela.
        } 
    } 

    function finalizar() {
    // Uma  FUNÇÃO finalizar no botão, para caso o usuário aperte esse número ele execute a função 
        resposta.innerHTML = `Existem ${lista.length} números pares.`
    // Para mostrar a resposta de quantos números são pares, usando um lista.length para contar todos os elementos dentro da LISTA.
    }