// new = função construtura
//Date = Objeto JS com varias funções


let dataInicialDaInformatica = new Date (0); // 01/01/1970 Timestamp unix ou época Unix
console.log (dataInicialDaInformatica.toString()); // somar a diferença do fuso horário

const tresHorasAmais = 60 * 60 * 3 *1000; //60seg x 60 min x 3hs x 1000 milisegundos (O js calcula tudo em milisegundos) 
dataInicialDaInformatica = new Date (0 + tresHorasAmais);
console.log (dataInicialDaInformatica.toString());
console.log("");
//----------------------------------------------

let data = new Date (); // data atual completa
console.log (data.toString());
console.log(Date.now()); // 1650641233063 milesimos de segundo desde a época Unix

data = new Date (1650641233063);// Algumas bases de dados mostra dessa forma
console.log(data.toString()); 
console.log("");
//----------------------------------------------

const escrevendoData = new Date ('2022-04-22 12:18:00');// Em formato de string

console.log ('Dia' , escrevendoData.getDate());
console.log ('Mês do sistema' , escrevendoData.getMonth());// mes começa do zero => 0 a 11
console.log ('Mês correto' , escrevendoData.getMonth()+1); //ai fica o mes correto
console.log ('Ano' , escrevendoData.getFullYear());
console.log ('Hora' , escrevendoData.getHours());
console.log ('Minuto' , escrevendoData.getMinutes());
console.log ('Segundos' , escrevendoData.getSeconds());
console.log ('Milisegundos' , escrevendoData.getMilliseconds());
console.log ('Dia da semana' , escrevendoData.getDay()); //0=Domingo até 6=Sabado

console.log("");
//----------------------------------------------
function zeroAEsquerda(num) { 
    return num >=10 ?num : `0${num}`;
} // adicionar o zero a esquerda da resposta principal

function formataData(novaData) {
    const dia = zeroAEsquerda(novaData.getDate());
    const mes = zeroAEsquerda(novaData.getMonth() +1);
    const ano = zeroAEsquerda(novaData.getFullYear());
    const hora = zeroAEsquerda(novaData.getHours());
    const min = zeroAEsquerda(novaData.getMinutes());
    const seg = zeroAEsquerda(novaData.getSeconds());
    return `${dia}/${mes}/${ano}  ${hora}:${min}:${seg}`
  
}

const novaData = new Date(); // variavel criada para ser o paramentro da função
 const dataBrasil = formataData(novaData) //variavel criada para chamar a função
 console.log(dataBrasil) // chamada da variavel com função