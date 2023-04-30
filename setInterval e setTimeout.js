function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    });
}

function funcaDoInterval() {
console.log(mostraHora());

}

setInterval(funcaDoInterval, 1000);

setTimeout(function(){
    clearInterval(timer);
}, 1000);

setTimeout(function(){
    console.log('Olá mundo!');
}, 5000)