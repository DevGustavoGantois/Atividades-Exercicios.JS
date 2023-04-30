//Criaremos uma function com 2 váriaveis (x,y)

//1 forma:
function DoisNumeros(x, y) {
    if (x > y) {
        return x;
    } else {
        return y; 
    }
}
console.log(DoisNumeros(2 , 4));

//2 forma:

function max(x1, y1) {
    if(x1 > y1)  return x1; // Como sabemos que o x é maior que y ele irá retornar o x caso for verdadeiro, se não retornará y caso for falso                            //Por isso que podemos fazer o código dessa forma, que ainda continuará legível!
    return y1;
}

console.log(max(10, 2))

//3 forma:
function max1(x2, y2) {
    return x2 > y2 ? x2 : y2;
}
console.log(max1(11, 12))

// 4 forma:
const max2 = (x3, y3) =>
    x3 > y3 ? x3 : y3;

console.log(max2(12, 6))