//Função imediata ou autoinvoacada
//IIFE= Immediately invoked function expression

//Usada para  o que estiver dentro dessa função não toque ou invoque qualquer variavel do escopo global

//global
const nome = 'João'; // vai ficar intocada
const sobrenome = 'Gusmão';


    //(função imediata(){})(chama ela imediatamente);

    (function () {
        const nome = 'J H';
        console.log(nome);
    })();
    
(function (idade, peso, altura) {
    const sobrenome = "Esteves";
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
        console.log (criaNome('Cibelly'));
    }
    falaNome();

    console.log(idade, peso, altura); // podemos usar os parametros informados na IIFE

})(38, 79, 1.80);