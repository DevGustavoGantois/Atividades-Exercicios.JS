//(condição)  ? 'Valor para verdadeiro': 'Valor para falso';
const pontuacaoUsuario = 500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal' //Se essa condição avaliar como verdadeira vai vir o valor da variável
//Essa linha de código em cima é igual a linha de código de baixo. A única diferença que no código de baixo já exibimos o valor de cara.
//No código de cima podemos usar essa váriavel em qualquer lugar do nosso código:

const corUsuario = null;
//Vamos ter o valor da várivel de baixo baseado na de cima.
const corPadrao = corUsuario || 'Preta'; //Quando utilizamos isso falamos que estámos setando um valor padrão para essa varável
//Se o usuário tivesse escolhido uma cor, por exemplo, em vez de ser null, ser pink a várivel corPadrao passaria ser a cor que o usuário escolheu. 
console.log(nivelUsuario, corPadrao);

/*
if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP)
} else {
    console.log('Usuário Normal)
}
*/