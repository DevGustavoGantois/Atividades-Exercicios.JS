//EXEMPLOS.
//Podemos escrever objetos dessa forma:

const pessoa1 = {
    nome:"Gustavo",
    sobrenome: "Gantois",
    idade:19 ,
    Sexo: "Masculino"
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
console.log(pessoa1.Sexo);

const pessoa2 = {
    nome:"Nayra",
    sobrenome: "Gantois",
    idade:54 ,
    Sexo: "Feminino"
};

console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa2.idade);
console.log(pessoa2.Sexo);

//Podemos fazer dessa forma também:

function criaPessoa (nome, sobrenome, idade, sexo) {
    return {
        nome:nome,
        sobrenome:sobrenome,
        idade:idade,
        sexo:sexo
//Essa função é chamada de FACTORY.
    }
}

const pessoa3 = criaPessoa ("Augusto", "Carvalho", 57);
const pessoa4 = criaPessoa ("Camila", "Santiago", 42, "feminino");
const pessoa5 = criaPessoa ("Jorge", "Silva", 22, "Masculino");
const pessoa6 = criaPessoa ("Juliana", "Caria", 20, "Feminino");
const pessoa7 = criaPessoa ("Matheus", "Caria", 21, "Masculino");
const pessoa8 = criaPessoa("Leandro", "Pitanga", 25, "Masculino");

console.log(pessoa1,pessoa2, pessoa3, pessoa4, pessoa5, pessoa6, pessoa7, pessoa8)


//Neste caso aqui, vamos pegar cada fragmento desse objeto um por um:

fala() {
    console.log(`A minha idade atual é ${this.idade}`)
    console.log(`${this.nome} ${this.sobrenome} está falando oi... `);
}

IncrementaIdade() {
    this.idade++;
}
}
pessoa1.fala();
pessoa1.IncrementaIdade();
pessoa1.fala();
