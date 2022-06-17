//RETURN = terminar a função e retornar o valor

function soma(a,b) {
    return a + b;
};
console.log(soma(5, 4)); // 9 => Aqui retornamos um valor com return

function subtrai(a,b) {
    console.log(a-b);
};
subtrai(5, 2); // Aqui não existe um valor de return, é diferente do primeiro, simplemente ele executa uma ordem

//=========================================

//exeplo 2:

function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome } // = nome: nome , Sobrenome = Sobrenome ( o JS entende que são iguais)
}
//significam a mesma coisa:
const p1 = criaPessoa('João', 'Henrique');
const p2 = { // Objeto literal
    nome: 'João',
    sobrenome: 'Esteves'
};

//Mesmo resultado:
console.log(p1, typeof p1);
console.log(p2, typeof p2);


console.log('');

//=========================================

//exemplo3

function duplica(n) {
    return n * 2;
};
function triplica(n) {
    return n * 3;
};
function quadriplica(n) {
    return n * 4;
};
console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
// para não ter que repetir varias funções parecidas:

function criMultiplicador(multiplicador) {
   return function (n) {
       return n * multiplicador;
    }
}
const duplicar = criMultiplicador(2);
const triplicar = criMultiplicador(3);
const quadriplicar = criMultiplicador(4);

console.log(duplicar(2), triplicar(2), quadriplicar(2));
