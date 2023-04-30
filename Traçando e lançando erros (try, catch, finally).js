try {
    console.log('Abri o um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o araquivo.')
    //É executado quando não há erros
    
} catch(e) {
    console.log('Deu erro.')
    console.log('Tratando o erro.') // AQUI NÓS SÓ TRATARIAMOS O ERRO.
    // E executada quando há erros.
} finally {
    console.log('FINALLY: Eu sempre sou executado.')
    // Será executado sempre.
}

function HoraAtual(data) {
    if (data && !(data instanceof Date)) { //instance quer dizer que essa váriavel é uma instancia da função construtora.
        throw new TypeError('Esperando instância de Date.')
    }


    if(!data) {
        data = new Date(); // A data tem que ser uma instância de Date, se não enviar uma data ele vai gerar automático aqui pra gente.
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12: false
    }); 
}

try {
    const data = new Date('01-01-1970 18:34')
    const hora = HoraAtual();
    console.log(hora);
} catch (e) {
    //Tratar erro.
} finally {
    console.log('Tenha um bom dia.')
}


