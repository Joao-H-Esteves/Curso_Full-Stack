function saudacao(nome) { //(nome) = parametro da função
    console.log(`Bom dia! ${nome}.`);
}

//chamando a função
saudacao ('João' ); //dentro da função vai o argumento que será lido nos parametros

 saudacao('Josefina');


 //RETORNO DE VARIAVEL

 function ola (nome1){
          return `Fala mano ${nome1}`;
 }

let variavel = ola ('João');
console.log(variavel); // vai retornar o conteudo do return

function soma (x,y){
    const result = x+y;
    return result;
}

console.log( soma(2, 21));
console.log( soma(5, -1));

// FUNÇÃO ANONIMA

const raiz = function (n){
    return n**0.5;
};
console.log ( raiz(25));
console.log ( raiz(16));
console.log ( raiz(9));

//ARROW FUNCTION

//const raiz = n => n**0.5; // ( arrow da função acima)

let raizes = (n, m) =>{
    n**=0.5;
    m**=0.5;
    let res = [n,m];
    return res;
}
console.log(raizes(9 , 25));