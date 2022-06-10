//declarando funções (Function hoisting)

// hoisting = eleva as declarações e variaveis globais com 'VAR" para o topo do programa


olaMundo();


//por isso podemos chama r a função anntes mesmo de declarar ela

function olaMundo() {
   console.log('Ola Mudinho');
}


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//First-class object ( Objetos de primera classe)
// Function expression
// Podemos declarar uma função dentro de uma variavel e ela se comporta como um dado

const souUmDado = function () {
   console.log('Sou um dado');
};

souUmDado(); // A variavel passa a ser uma função

function executaFuncao(funcao) {
   console.log('');
   console.log('Estou dentro de outra funçao e vou executar a função abaixo');
   funcao();
};

executaFuncao(souUmDado);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Arrow function
const funcaoArrow = () => {
   console.log('');
   console.log('Sou uma arrow function');
};
funcaoArrow();

