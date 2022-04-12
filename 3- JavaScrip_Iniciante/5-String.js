//  indices ->   01234567
let umaString = 'Um texto';

console.log(umaString[3]);
// vai pegar apenas o elemento do indie 3

console.log(umaString.charAt(7));
//funciona da mesma forma

console.log(umaString.concat(' muito bonito'));
//concatena (adiciona) elementos a string

console.log (umaString);

// BUSCANDO ELEMENTOS DENTRO DE UMA STRING

console.log(umaString.indexOf('texto'));
//mostra que a palavra texto começa no indice 3

console.log(umaString.length);
//conta a quanidade de elementos dentro da string

let segundaString = 'O rato roeu a roupa do rei de roma.'

console.log(segundaString.split(' '));
// separa a string em um array , com o elemento selecionado, nesse caso o espaço.
console.log(segundaString.split(' ', 3));
// só os 3 primeiros elementos do array