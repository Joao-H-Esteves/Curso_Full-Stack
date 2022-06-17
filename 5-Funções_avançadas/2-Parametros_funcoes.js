// tudo de que é digitado como argumento em uma função fica em uma variavel invisivel chamada 'arguments'

function funcao() {
    
    console.log(arguments);
    console.log(arguments[4]);
    //pode acessar as keys dos argumentos
};
funcao('valor', 1, 2, 3, 8, 55, 100); // valor dos aguments

// SOMANDO AS KEYS :

function amorDaMinhaVida() {
    let total, soma = 0;
    
    for (let argumento of arguments) {
        total = arguments.length;
        soma += argumento;
    }
    console.log('total = ', total, ' ','soma =',soma);
}

amorDaMinhaVida(13, 11, 2021, 07, 11, 22, 00);

// A var invisivel 'arguments' sustenta todos os argumentos digitados dentro doas paramentros da função, mesmo quando utilizasse paramentros na criação da função:

function funcaoArgumentada(a,b ,c) {
    let total = 0;
    for (const iterator of arguments) {
        total += iterator;
    }
    console.log(total, a, b,c);
};
funcaoArgumentada(1, 2, 3, 4, 5, 6, 7); // vai conservar o a=1,b=2,c=3

