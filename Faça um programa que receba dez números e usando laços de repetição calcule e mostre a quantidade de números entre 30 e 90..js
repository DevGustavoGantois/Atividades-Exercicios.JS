numero1 = 35
numero2 = 66
numero4 = 40
numero5 = 41
numero6 = 50
numero7 = 2
numero8 = 15
numero9 = 8
numero10 = 22

let qtd = 0

for(var i = 0; i < 10; i++ ){
   var de30a90 = Number(prompt("Digite um valor:"))
   if ( qtd >= 30 && qtd <= 90 ){
       console.log(`A quantidade de números entre 30 e 60 são ${de30a90 ++}`);
   } else if ( qtd < 30 && qtd > 90) {
    console.log (`Esses números não se encaixam entre 60 e 90`);
   }
    
   }
