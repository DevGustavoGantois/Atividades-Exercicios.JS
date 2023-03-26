peso = 40.500
altura = 1.78
var imc = peso / (altura**2 ) 
if(imc < 18.5){
    console.log(`O indivíduo tem altura de ${altura} , peso ${peso} e o IMC = ${(imc.toFixed(1))} e ele está abaixo do seu peso ideal!`)

} else if (imc >= 18.5 && imc <= 25){
    console.log(`O indivíduo tem altura de ${altura} , peso ${peso} e o IMC = ${(imc.toFixed(1))} e ele está com o seu peso ideal! `)
} else if (imc >= 25 && imc <= 30) {
    console.log(`O indivíduo tem altura de ${altura} , peso ${peso} e o IMC = ${(imc.toFixed(1))} e ele está acima do peso! `)
} else if (imc > 30){
    console.log(`O indivíduo tem altura de ${altura} , peso de ${peso} e o IMC de ${imc.toFixed(1)} e ele está obeso! `)
}