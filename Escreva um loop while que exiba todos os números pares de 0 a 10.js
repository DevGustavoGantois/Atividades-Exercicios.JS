var numero = 2
while(numero != -1) {
    if (numero % 2 == 0) {
        for( var numero = 0; numero < 11; numero++) {
            console.log(`${numero ++}`);
            
            
        } 
    } else {
        console.log(`É um número impar, não consigo contar.`)
            break;
    }
}