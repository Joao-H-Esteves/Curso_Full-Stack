function conta (operador, acumulador , numeros) {
    console.log(operador, acumulador, numeros);
};

conta('+', 0, [20, 30, 40, 50]);//array de numeros

//==============================================
//  REST OPERATOR

//Teremos o mesmo resultado usando um rest operator :' ...algumaCoisa'

function conta2(operador, acumulador, ...numeros) { //rest operator
    console.log(operador, acumulador, numeros);
};