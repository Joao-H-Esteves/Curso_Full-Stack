/*
TIPOS PRIMITIVOS (imutáveis):

STRING
NUMBER
BOOLEAN
UNDEFINED
NULL
BIGINT
SYMBOL
*/

let nome ='João';
console.log(nome[0]); //J

nome[0]= 'M'; // como a string é imutavel não será possivel alterar o seu valor para um array
console.log(nome[0]); // Continua a letra J.

//---------------------------------------------------------

let a = "A";
let b = a;
console.log(a , b); // A,A

a ='Qualquer coisa';
console.log(a , b);//Qualquer coisa A
// A variavel b não muda seu valor



/* DADOS POR REFERÊNCIA (MUTÁVEIS)

    ARRAYS
    OBJETOS
    FUNCTION

    Os dados apontam para o mesmo local da memoria,
    logo se mudar algo da memoria muda todos os dados.
*/
let ArrayA = [1,2,3];
let ArrayB = ArrayA;

//para copiar o valor devemos fazer assim:
let ArrayC = [...ArrayA];//spread(espalhar)

console.log(ArrayA, ArrayB);//[ 1, 2, 3 ] [ 1, 2, 3 ]

ArrayA.push(4, 'luiz');
console.log(ArrayA, ArrayB);// [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]

console.log(ArrayC); // Esse aqui ficará imutavel pois foi feita a copia "let ArrayC = [...ArrayA]; "

