const pessoa ={
    nome: 'João',
    sobrenome: 'Esteves',
    nascimento: '14-06-1984',
    documentos:{
        rg: 3434343434,
        cpf: '',
        matricula:''
    },
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
const { nome: Primeironome= 'Pedro' ,nascimento = ''} = pessoa
/*  podemos setar a variavel como vazia '', caso não haja nada nela ou 
dar valor a ela mas só vai pegar caso não exista nada no var original --- IMPORTANTE
*/
console.log(Primeironome, nascimento);//João 14-06-1984

//OBJETO DENTRO DO OBJETO:
const {endereco: {rua , num: numero}} = pessoa;
const {documentos}= pessoa;
console.log(documentos,rua, numero);

// RESTO DOS DADOS NÃO COLETADOS

const{nome, rg , cpf = 222222222, ...resto} = pessoa;
console.log(nome, rg , cpf , resto);

