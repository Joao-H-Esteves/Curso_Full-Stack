// FACTORY = FUNÇÕES QUE RETORNAM OBJETOS

//QUANDO UMA FUNÇÃO ESTA DENTRO DE UM OBJETO É CHAMADA DE  """MÉTODO"""

//Ex:
function criaPessoa(nome, sobrenome, peso, alt) {
    return {
        nome,
        sobrenome,

        fala: function fala (assunto) { // MÉTODO (nome primeiro: function anonima depois)
            return `${nome}, ${this.cargo}, esta falando sobre ${assunto}`;
            //PARA ACESSSAR CHAVES QUE NÃO FORAM DECLARADAS NOS PARAMETROS USAMOS O 'THIS.' QUE SE REFERE AO P1
        },

        cargo: 'aluno',
        peso,
        altura: alt,

        imc() { // Forma curta de criar um MÉTODO
            const calcIndicie = this.peso / (this.altura ** 2);
            return calcIndicie.toFixed(2);
        },
            //GETTER: GET
        get nomeCompleto() { //GET = vai fazer o metodo(funçao) virar um atributo (string), não vai precisar dos '()'
            return `${this.nome} ${this.sobrenome}`
        },

            //SETTER: SET
        // USADO PARA POSER ALTERAR O VALOR DO ATRIBUTO
        set nomeCompleto(valor) {
            valor = valor.split(' '); // adicionar espaçamento entre palavras
            this.nome = valor.shift(); //apaga o primeiro elemento do array
            this.sobrenome = valor.join(" "); // juntando o resto em uma string e separando com um espaço ' '.
        }

    };
}
const p1 = criaPessoa('João', 'Esteves',82,1.80); // ELE (p1)É O THIS (ONDE ESTA TODAS AS INFORMAÇÕES E FOI QUEM CHAMOU O OBJETO)

console.log(p1); //{ nome: 'João', sobrenome: 'Esteves' ,fala: [Function: fala],cargo: 'aluno', peso:82 , alt: 1.80}

console.log(p1.fala('estudos')); //João, aluno, esta falando sobre estudos

const p2 = criaPessoa('Maria', 'Camargo', 80, 1.70);

console.log(p2.fala('provas'));
console.log(p2.imc()); //chamando o metodo
console.log(p2.nomeCompleto); // chamando o getter= metodo que finge ser um atributo (string)

//=============================================================
//USANDO O SETTER:
p2.nomeCompleto = 'Otaviana Oliveira Santos';
console.log(p2.nome); //Otaviana
console.log(p2.sobrenome); //Oliveira Santos

// O nome Maria Camargo deixou de existir e foi subistituido pelo comando set 

