//Escopo lexico = ter acesso as variaveis globais

const nome = 'João';

function falaNome() {
    console.log(nome);
    //vai pegar a var fora da função, pq não tem dentro da sua bolha
    // vai procurar no pai, no avó, etc
};

falaNome(); // João

function usaFalaNome(params) {
    const nome = 'Pedro';
    falaNome(); // ela vai lembrar de tudo que foi feito com ela e passar para a função principal
};
usaFalaNome(); // João
//OBS: A função irá ignorar a var Pedro, pois devido ao "escopo Lexico" a função lembra onde foi declarada e quem era seus vizinhos no momento 

