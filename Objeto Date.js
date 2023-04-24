//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
//Site referêncial para você estudar o Obejto Date.
const tresHoras = 60 * 60 * 3 * 1000; // O resultado disso será a data de Inicialização.
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia);//Essas datas são baseadas dessa forma ---> 01/01/1970 é a data 0, onde começa -> Timestamp unix ou época unix. 
//Caso queria uma data posterior a data de incialização eu uso um valor negativo dentro do parenteses, caso queira um valor depois da inicialização eu uso o valor positivo.
console.log(data.toString());

//Caso quisesse uma data anterior a da inicialização que está sendo mostrava em forma de operação.
const data1 = new Date(0 + tresHoras - umDia)

//Suponhamos que vamos criar uma Data: 
const data2 = new Date(2023,3, 20, 15, 14, 27);// Essa data representária 20/04/2023
console.log(data.toString());
// O mês em JavaScript começa do 0.
new Date(); //ANO, MES, DIA, HORA, MINUTO, SEGUNDO, MILISSEGUNDOS

console.log('Dia', data.getDate()); //Obter o número do dia.
console.log('Mês', data.getMonth() + 1); //Caso queira o mês real eu boto o mês +1.
console.log('Ano', data.getFullYear());
console.log('Horas', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('Milissegundos', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toString());
console.log(Date.now());// Aqui irei obter os milesimos de segundos da data, do marco 0 até hoje.    

//Criar uma function que formata a data:
function ZeroAesquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const dia = ZeroAesquerda(data.getDate());
    const mes = ZeroAesquerda(data.getMonth()+ 1);
    const ano = ZeroAesquerda(data.getFullYear());
    const hora = ZeroAesquerda(data.getHours());
    const min = ZeroAesquerda(data.getMinutes());
    const seg = ZeroAesquerda(data.getSeconds());


    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}.`
}

const data4 = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);