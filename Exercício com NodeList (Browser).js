const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p'); //Selecionar vários elementos

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
for (let p of ps) { //Como iterar esses elementos.
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF';
}
