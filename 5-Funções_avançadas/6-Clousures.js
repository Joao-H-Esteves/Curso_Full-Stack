//Global
const nomePrincipal = 'João'
function retornaFuncao() {
    const nome = nomePrincipal;
    return function () {
        return nome;
    };
};

const funcao = retornaFuncao(); // ao chamar a variavel funcao a mesma ira retornar a funao anonima que retornará o 'nome'.

console.log(funcao); // [Function (anonymous)]

// Closures: habilidade de acessar os pais e primos da função

//O return nome vai lembrar do seu escopo Lexico, ou seja, acessar a const nome do pai, que vai acessar o nomePrincipal do avô.