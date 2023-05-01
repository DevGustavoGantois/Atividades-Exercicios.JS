function getTimefromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false ,
        timeZone: 'UTC' ,
    });
}

const relogio = window.document.querySelector('.relogio');
const iniciar = window.document.querySelector('.btn-iniciar');
const pausar = window.document.querySelector('.btn-pausar');
const zerar = window.document.querySelector('.btn-zerar');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = getTimefromSeconds(segundos);
    }, 1000);
}
iniciar.addEventListener('click', function (event){
    //Aqui ele irá iniciar
    relogio.classList.remove('.pausado');
    clearInterval(timer);
    iniciaRelogio();   
});


pausar.addEventListener('click', function (event){
    //Aqui será o códgio que ele ira pausar.
    clearInterval(timer);
    relogio.classList.add('.pausado');
});

zerar.addEventListener('click', function (event){
    //aqui será o código que ele irá zerar.
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0
});
