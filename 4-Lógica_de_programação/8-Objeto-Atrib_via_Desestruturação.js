const pessoa ={
    nome: 'João',
    sobrenome: 'Esteves',
    nascimento: '14-06-1984',
    endereco:{
        rua: 'Av Logo ali',
        num: 320,
        cep: 00000-000
    }
};

console.log(pessoa.nome); // João

let Nome= pessoa.nome; // atribuição normal
console.log(Nome);

//Atribuiçãio via_Desestruturação
const {sobrenome} = pessoa;
console.log(sobrenome);

//mudando o nome da chave
const { nome: Primeironome ,nascimento = ''} = pessoa
// podemos setar a variavel como vazia '', caso não haja nada nela
console.log(Primeironome, nascimento);//João 14-06-1984

//OBJETO DENTRO DO OBJETO:
const {endereco: {rua , num: numero}} = pessoa;
console.log(rua, numero);
