// VARIAVEIS GLOBAIS

const calculadora = criaCalculadora();
calculadora.inicia();

//factory function:

function criaCalculadora() {

    return {
        result: document.querySelector('.result'), // caixa de texto do total do resultado

        inicia() {
            this.clicarBotoes();
            console.log('iniciada');
        },
        clicarBotoes() {
            document.addEventListener('click', function (event) {
                const apertou = event.target;
                console.log(apertou);
                if (apertou.classList.contains('btnGeneric')) {
                    console.log('apertou o botão');
                    this.comandoParaTotal(); // caixa de reusltado
                };
                
            })
        },
        comandoParaTotal() { // caixa de resultado
             console.log('teste');
        }


        

    };

}
