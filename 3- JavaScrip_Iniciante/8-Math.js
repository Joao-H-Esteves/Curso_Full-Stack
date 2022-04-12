// OBJETO MATH (matematica)

//ARREDONDANDO
let num1 = 9.4324234;

let num2 = Math.floor(num1); // arredonda para baixo

console.log(num2);

let num3 = Math.ceil(num1);// arredonda para cima

console.log(num3);

let num4 = Math.round(num1); // Arredonda para o mais proximo

console.log(num4);


//LOCALIZANDO  NUMEROs
console.log(Math.max(1,3,34354,34,23,-4,55,343,234234,2322,2222,087)); // buscar o maior numero
console.log(Math.min(1,3,34354,34,23,-4,55,343,234234,2322,2222,087)); // buscar o menor numero

console.log(Math.random()); // numeros aleatorios entre 0 e 1 (0.3289711398973414)
console.log(Math.random() * (10-5)+5); // float de 10 a 5 (9.39453998301474)
console.log(Math.round(Math.random() * (100-1) +1)); // misturando as funções para aparecer int de 1 a 100

 