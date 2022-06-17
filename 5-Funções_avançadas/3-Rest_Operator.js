function conta (operador, acumulador , numeros) {
    console.log(operador, acumulador, numeros);
};

conta('+', 0, [20, 30, 40, 50]);//array de numeros

//==============================================

//  REST OPERATOR (sempre o ultimo paramentro da função)

//Teremos o mesmo resultado usando um rest operator :' ...algumaCoisa'

function conta2(operador, acumulador, ...numeros) { //rest operator
    console.log(operador, acumulador, numeros);
};
conta2('+', 0, 20, 30, 40, 50); // Não há necessidade dos [] devido ao rest, o motor JS entende que todos os elementos após o 0 serão utilizados no Parametro 'numeros'

//+++++++++++++++++++++++++++++++++++++++++++++++++++++

//EXEMPLO
function conta3(operador, acumulador, ...numeros) {
    for (let num of numeros) {
        //console.log(num);// 20, 30, 40, 50
        acumulador += num
        console.log(acumulador); // 20, 50 , 90, 140
    };
};
conta3('+', 0, 20, 30, 40, 50); 

//--------------------------------------------------------

// função completa + express
const conta4 = function (operador, acumulador, ...numeros) {
    for (let num of numeros) {
        if (operador === '+') acumulador += num;
        if (operador === '-') acumulador -= num;
        if (operador === '/') acumulador /= num;
        if (operador === '*') acumulador *= num;       
    };
    console.log(acumulador);
};
conta4('*', 1, 20, 30, 40, 50); 




