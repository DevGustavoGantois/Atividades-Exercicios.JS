//Return
//Retorna um valor
//Termina a função
function soma(a, b) {
    return a + b;
}

function soma2(a, b) {
    console.log(a + b);
}

soma2(5, 2)

function criaPessoa(nome, sobrenome) {
    return {nome: nome, sobrenome: sobrenome}
}

const p1 = criaPessoa('Gustavo', 'Gantois');
const p2 = {
    nome: 'Gustavo',
    sobrenome:'Gantois'
}

console.log(typeof p1);
console.log(typeof p2);

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + '' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá');
const resto = fala('mundo!');

function duplica(n) {
    return n * 2;
}

function triplica(n) {
    return n * 3;
}

function quadriplica(n) {
    return n * 4;
}

function criaMultiplicador (multiplicador) {
    // multiplicador
    function multiplicacao(n) {
        return n * multiplicador;
    }
    return multiplicador;
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4); 
console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

