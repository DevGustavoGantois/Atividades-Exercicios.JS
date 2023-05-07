const nome = 'Gustavo';
//Posso acessar os vizinhos dela...
//Posso acessar qualquer variável que foi junto com ela.
function falaNome() {
   // const nome = 'Gustavo'; // Buscou a variável nome, dentro do escopo dela, encontrou e executou
    console.log(nome);
}
falaNome(); //Escopo léxico
//A função é uma bolha, se você busca uma variável dentro da função,
//se eu busco nome dentro da função e essa variável não está dentro da função,
//e ai ele vai no pai dela, dentro dessa função e se ele n encontrar no pai dela
//ele busca no pai do pai dela e assim por diante...ele vai pipocando na bolha, até chegar
//no escopo global, se a varável não existir no escopo global ele vai dar um erro falando que
//essa variável não está definida

function usaFalaNome() {
    const nome = 'Gustavo';
    falaNome(); //Nesse momento a função continua lembrando o local onde ela foi declarada, isso caracteriza o Escopo léxico da função
}
usaFalaNome(); // Não mudou absolutamente nada, a função continua lembrando oq foi declarada
//e o que estava declarando quando ela foi declarada
