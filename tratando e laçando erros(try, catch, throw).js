try {
    console.log(naoExisto);
} catch (e) { // <--- O erro vai estar nessa váriavel 
    console.log('naoExisto não existe.');
    console.log(e) //<--- Não é interessante você exibir este erro, Pois dará vunerabilidade ao nosso código.

}

function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
/*Podemos lançar um erro -->*/      throw new Error('x e y precisam ser números.') //Esse comando mostrará seu erro.
    }
    return x + y;
}

try { // Para saber a forma correta. Fazemos dessa forma utilizando essa ferramenta.
console.log(soma(1, 2));
console.log(soma('2', 3));
} catch (e) {
    //console.log(error);
    console.log('Alguma coisa mais amigável para o usuário.')
}

//Podemos criar nossas classes e extender nossas funções se quiserssemos.

//Existem vários tipos de errors.
//Eles são usados para o desenvolvedor entender qual o tipo de erro que ocorreu.