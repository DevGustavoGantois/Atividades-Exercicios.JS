const elementos = [
    {tag: 'p', texto: 'Frase 1'} , // 0
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'footer', texto: 'Frase 3'}, // 2
    {tag: 'section', texto: 'Frase 4'} // 3
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for( let i = 0; i < elementos.length; i++ ) {
    let { tag, texto} = elementos[i];
    let TagCriada = document.createElement( tag);
    TagCriada.innerText = texto;    //Podemos criar um nó de texto:
                                    // let textoCriado = document.textNode(texto);
    div.appendChild(TagCriada);
    
}

container.appendChild(div);