//Função de Call Back

//nem sempre as solicitações no JS conseguirão serem feitas em ordem listada, pois uma poderá demorar mais que a outra. Ex:


function rand(min= 950, max=2000) {
    let num = Math.random() * (max - min) + min;
    // simulando atrasos para rodar as funções
    return Math.floor(num)
}
//console.log(rand()); //Teste

function f1() {
    setTimeout(() => { 
        console.log('f1');
    }, rand());
}

// para evitar que a ordem se perca devido ao atraso, usaremos o callback();
function f2 (callback) {
    setTimeout(() => {
        console.log('f2');
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(() => {
        console.log('f3');
        if (callback) callback();
    }, rand());
}

/* sem callback
f1();
f2();
f3();
console.log('Essa seria a ultima coisa a rodar');
*/

f1(); //Sem callback vai entrar no random

//com callback
f2(function () {//com callback
    f3(function () {
        console.log('Essa seria a ultima coisa a rodar');
    });
});

//para encurtar o codigo e evitar uma boneca matryoshka (um cod dentro do outro):
f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Ultimo codigo');
}

