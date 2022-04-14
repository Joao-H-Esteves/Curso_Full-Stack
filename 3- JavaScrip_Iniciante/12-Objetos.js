// PARA CRIAR UM OBJETO, É NECESSARIO USAR CHAVES{}

const pessoa1= {
    //atributos:
    nome:'João',
    sobrenome: 'Esteves',
    idade : '25'
};

console.log(pessoa1.nome);//João
console.log(pessoa1.sobrenome); // Esteves


//+++++++++++++++++++++++++++++++++++++++++++++++++++++

//Para criar uma forma automatica de fazer esse tipo de objeto, usasse funções:
//FUNÇÕES QUE CRIAM OBJETOS SÃO CHAMADAS DE FACTORY'S

function criaPessoa(nome , sobrenome, idade) {// 'parametros'
    return{
        nome: nome, 
        // como o atributo é igual ao parametro, podemos fazer assim:
        sobrenome, idade
    };
}

const pessoa2 = criaPessoa('Pedro', 'Silva',34);//argumentos = valores passados para os paramentros da função
console.log(pessoa1 , pessoa2);

const pessoa3 = criaPessoa('Antonio', 'Omar',54);
const pessoa4 = criaPessoa('Julia', 'Souza',14);
const pessoa5 = criaPessoa('Sandra', 'Laudelino',32);

console.log(pessoa1.nome , pessoa5);
