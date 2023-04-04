const ValorDaCompra = 500;

for (let i = 1; i < 26; i++) {
    console.log(`Valor da compra: ${ValorDaCompra} 
    Porcentagem de desconto: ${i}% Valor final ${ValorDaCompra * (1-(i/200))} `);

}

