/* OPERADORES DE COMPARAÇÃO
    > maior que
    < menor que
    >= maior ou igual a 
    <= menor ou igual a 
    == igualdade (somente valor)
    === igualdade estrita (valor e tipo)
    != diferente (somente valor)
    !== diferente estrito (valor e tipo)
*/
console.log (10 > 5); //É uma pergunta então a resposta é boolean

const num1 = 10; // number
const num2 ='10';// string

let comp = num1 == num2; // porque não usar apenas ==
console.log (comp); //true

let comp1 = num1 === num2;
console.log (comp1); // false
