// OBJETO COM FUNÇÕES

const cadastro = {
    nome: 'Jonhy', 
    sobrenome:'Gusmão', 
    idade:'37',

    fala(){
        console.log(`O cadastro do ${this.nome} de ${this.idade} anos, foi concluido.`);
        //Nesse contexto usamos o 'this' para referencia de atributos do objeto dentro da função
    },
    incrementaIdade(){
        this.idade++;
    }
};

console.log(cadastro);

cadastro.fala();
cadastro.incrementaIdade();
cadastro.fala();
cadastro.incrementaIdade();
cadastro.fala();