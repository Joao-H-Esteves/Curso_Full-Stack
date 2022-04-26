// ATRIBUIÇÃO VIA DESTRUTURAÇÃO

let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

console.log (a,b,c);

//[a , b ,c] = [1, 2, 3]; // ATRIBUIÇÃO VIA DESTRUTURAÇÃO

//console.log (a,b,c); // 1, 2, 3


// const numeros = [1, 2, 3];
// [a , b ,c] = numeros;
//atribuimos um valor desestruturando o lado esquerdo

//console.log (a,b,c); // 1, 2, 3

const letras =[b , c ,a];
[a , b ,c] = letras;

console.log (a,b,c);
console.log ('' );
//-----------------------------------------------------
//EXEMPLO 2:

//   indice  0  1  2  3  ..... etc
const num = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const elemUm = num [0];
const elemdois = num [1];
console.log(elemUm, elemdois); // = 1, 2

//Para evitar de precisar criar uma variavel para cada elemento,
//Usamos a  ATRIBUIÇÃO VIA DESTRUTURAÇÃO

//Podemos usar elementos de um Array 

let [primeiroNumero, segundoNumero, ... resto] = num;

console.log (primeiroNumero, segundoNumero);
console.log (resto); // vai pegar todo o resto do array que não foi atribuido em outra variavel.
//[  30, 40, 50, 60, 70, 80, 90 ]

// indice    1  2   3    4   5    6  7   8
     let [ um , , tres , ,cinco , ,  , oito] = num; // pulasse os espaços de cada indice que não vai ser utilizado

console.log (um,tres,cinco,oito); // 10 30 50 80
console.log ('' );
//-----------------------------------------------------
//EXEMPLO 3: ARRAYS

//                    0   ,   1   ,     2
//                  0,1,2 , 0,1,2 , 0,1,2
const ArrayList = [[1,2,3],[4,5,6],[7,8,9]];
  //                            ^
// maneiras de exibir o numero 6
console.log (ArrayList[1][2] ); // Matriz

const [,[,,seis]] = ArrayList; // ATRIBUIÇÃO VIA DESTRUTURAÇÃO pulando (não recomendado)
console.log ( seis);

const[lista1, lista2, lista3] = ArrayList;
console.log ( lista2 [2]);