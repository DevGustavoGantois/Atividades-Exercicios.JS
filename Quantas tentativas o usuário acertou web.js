  //mensagem de boas vindas
  function bemVindo(){
    alert("Seja bem vindo ao jogo de tentativas! Você terá 3 chances para adivinhar o número escolhido!")
};

//funçao para printar mensagem
function imprimeFrase(frase){
    document.write(frase);
};

//funçao para pegar numero p adivinhaçao
function sorteiaNum(){
    return Math.round(Math.random()*6);
};

//var de tentativas, numero do palpite, numero aleatorio e imprime o mesmo no log, 
//junto da mensagem de boas vindas

let tentativas = 0;
let numSorteado = sorteiaNum();
let numAdivinhado = document.querySelector("input");

function iniciaJogo(){
    tentativas = 0;
    numSorteado = sorteiaNum();
    bemVindo();
}

iniciaJogo();

function adivinhacao(){

    if (numAdivinhado.value == numSorteado){
        alert("Parabéns! Você acertou! Vamos Jogar novamente!");
        iniciaJogo();
    } else {
        alert("Você errou o palpite! Tente novamente.");
        tentativas++;
        if (tentativas == 3){      
            alert("As tentativas acabaram. O número misterioso era " + numSorteado + "! Não desanime, vamos jogar novamente!");
            iniciaJogo();
        }
    }

}

//variavel para o botao chamar a funçao de comparaçao
let button = document.querySelector("button");
button.onclick = adivinhacao;