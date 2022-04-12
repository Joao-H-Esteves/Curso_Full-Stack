// converter o numero para string

let num1 = 20;
let num2 = 3.565743;
let num3 = 4;

console.log (num1 +num2); //numbers
console.log (num1.toString() + num2.toString()); // virou string momentaneamente.

num3 = num3.toString(); // alterou para string PARA SEMPRE
console.log( typeof num3);

console.log (num1.toString(2)); //transforma em num BINARIO

console.log (num2.toFixed(2)); // casas APOS a virgula (decimais) arredondadas 

//VERIFICAR SE O NUMERO É INTEIRO (TRUE OR FALSE)
console.log (Number.isInteger(num2));

//VERIFICAR SE UM CALCULA VAI DAR ERRO NaN (NOT A NUMBER)
let temp = num1 * 'ola';
console.log(temp);
console.log(Number.isNaN(temp));

//IMPRECISÃO NUMERICA DO JS EM PONTO FLUTUANTE
            // IEEE 754.2008 (versão)

let impr1 = 0.7 ; let impr2 = 0.1;

console.log (impr1 + impr2); // 0.7999999999999999
console.log ((impr1 + impr2).toPrecision(1));// 0.8

