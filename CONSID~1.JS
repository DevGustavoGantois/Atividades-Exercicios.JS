let notas = [];
    let n;

    function calcMedia() {
        let caixa = document.getElementById("caixa");

        notas.forEach((nota, index) => {
            if (nota < 6) {
                notas[index] = nota + 1;
            }
        });

        caixa.innerHTML = "";
        notas.forEach((nota) => {
            const item = document.createElement("option");
            item.text = nota;
            caixa.appendChild(item);
        });
    }

    function addNotas() {
        let caixa = document.getElementById("caixa");
        n = Number(document.getElementById("notas").value);
        notas.push(n);

        caixa.innerHTML = "";
        notas.forEach((nota) => {
            const item = document.createElement("option");
            item.text = nota;
            caixa.appendChild(item);
        });
    }


//Criei um let notas =  que vai ser uma lista que vai pegar todo o códgigo de forma global.
//Criei um Let n que vai ter o valor NUMBER.
//FUNCTION como função quando apertar o botão CalcMédia ele irá acionar.
//Criei uma Let Caixa que vai ser onde as notas ficarão guardadas na caixa.
//Um notas forEach com um IF (se) dentro, para caso as notas forem menor que 6, será adicionado mais 1 ponto nelas.
//um ForEach usado para percorrer a lista notas, e um index executara o bloco dentro das chaves.
// Uma constante ITEM que criara um elemento OPTION
//item.text será os valores da nota.
//caixa.appendChild(item); para adicionar os itens dentro do OPTION que foi criado com essa constante
//uma Função AddNotas que ao clicar no botão ela será executada.
// e as mesmas coisas de cima se aplicam ao códgio de baixo.
