function Contar() {
    var numero1 = document.getElementById("número")
    var resposta = document.getElementById("res")

    let n = Number(numero1.value)
    
    if ( n === 0 ) {
        window.alert( `[ERROR] Digite um número...` )

    } else if ( n != -1) {
        while (-1 <= n ) {
            for (c = 0; c <= n ; c++) {
                resposta = window.prompt(`Contando ->${c}`)
                if (c = n ){
                    break;
                    }
                
                   
                
            
            }
        
            }
            
        }
        }