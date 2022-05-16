// SET INTERVAL

//Usada para fazer uma função rodar a cada tempo determinado pela config dela


function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pr-BR',{hour12: false});
}

//Usando uma segunda função para chamar a primeira
/* 
function funcaoDoInterval() {
    console.log(mostraHora());
}

setInterval(funcaoDoInterval, 1000);

//passando q referencia sem executar a função sem os '()'.
//passando de quanto tempo será executada, em milisengundos (1000)
*/

//usando função anonima

setInterval( function (){
    console.log(mostraHora());
}, 1000);