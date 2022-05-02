// USAMOS O WHILE OU DO WHILE QUANDO NÃO SABEMOS QUANDO O LAÇO TERMINA, 
//OU SEJA QUANDO NÃO SABEMOS A TOTALIDADE DA VARIAVEL DE CONTROLE

let controle = 0;

while (controle <= 10) {
    console.log(controle);
    controle++;
}
console.log(' Acabou a Contagem');
//==========================================================

function random(min , max){
    const r = Math.random ()* (max - min) * min;
    // função para criar numeros aleatorios 
    return Math.floor(r); // arredondar o numero
}

let rand = random ();

while ( rand !== 10) { //enquanto for diferente de 10 rodar a função
    rand = random (1, 50)
    console.log(rand);
};
console.log( 'achou o numero 10');

do { // primeiro irá testar ao menos uma vez o parametro só depois irá testar a condição
    console.log(rand);
} while ( rand !== 10);