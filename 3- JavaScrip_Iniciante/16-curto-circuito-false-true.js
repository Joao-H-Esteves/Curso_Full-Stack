/*
OS SHORT CIRCUIT
param de rodar no primeiro valor falso SEMPRE

true && false && true && true ( ele para de ler o codigo ja no primeiro false)

ALGUNS VALORES SÃO IDENTIFICADO COMO FALSOS
FALSY VALUES

0          - Num zero
'' ,"",``  - String vazia
null / undefined
NaN

QUAQUER COISA DIFERENTE DISSO SERÁ TRUE


*/
console.log('Luiz' && 'Maria'); //true vai apontar o ultimo valor

console.log('Luiz' && '' && 'Maria'); // Vai parar na string vazia pois é falsa, e vai apontar ela

// outro exemplo com &&
function falaOi() {
    return 'Oi!';
};
let vaiExecutar = false;

console.log(vaiExecutar && falaOi());
//Ela não vai executar a função devido ao curto circuito vai mostrar false

vaiExecutar = 'qualquer coisa';

console.log(vaiExecutar && falaOi()); // agora a function vai rodar pois a variavel agora é true

/* ------------------------------------------------
Ja o => || OR

exibe o primeiro valor true , seja lá quantos falses houver
 */
console.log(0 || false || null || 'João' || true || 123); // vai retornar o João pois é o primeiro true da expressão

//Exemplo 1 :
// Se o usuario escolher uma cor o site fica com ela, caso contrario usar a cor padrão

const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao); // como o usuario não escolheu a cor ela vai parar de rodar no preto, pois é o primeiro true

//Exemplo 2
const a = 0; const b = null; const c = 'false'; const d = false; const e = NaN;

console.log(a || b || c || d || e); // vai mostrar a string c , pois é true

