/**
 * ESCREVA UMA FUNÇÃO QUE RECEBA UM NUMERO E RETORNE:
 * DIVISIVEL POR 3 = FIZZ
 * DIVISIVEL POR 5 = BUZZ
 * DIVISIVEL POR 3 E 5 = FIZZBUZZ
 * NUMERO "NÃO" DIVISIVEL POR 3 E 5 + RETORNA O PROPRIO NUMERO
 * CHEGAR SE O NUMERO É REALMENTE UM NUMBER
 * USAR FUNÇÃO PARA NUM DE 0 A 100 
 */

//let num = 15 //variavel de controle

function isNumber(num) {
    if (typeof num === 'number') return (FizzBuzz(num));

     return (console.log(`numero "${num}"  invalido, tente novamente`));
};
function FizzBuzz(num) {
    
    if (num %3 === 0 && num %5 === 0) return ('## Numero FizzBuzz');        
    
    if (num %3 === 0) return ('# Numero Fizz');
    
    if(num %5 === 0) return ('# Numero Buzz');

        return (' não passa no teste');
};

for (let index = 0; index <= 100; index++) {
    
    console.log(index, isNumber(index));
}