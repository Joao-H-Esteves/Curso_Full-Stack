// VARIAVEIS GLOBAIS

const calculadora = criaCalculadora();
calculadora.inicia();

//factory function: (função fabrica)

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
                    this.comandoParaTotal(apertou.innerText); // caixa de resultado
                    event.preventDefault() // ivitar o refrech da pagina 
                };
                
            }.bind(this));//para corrigir o bug do this, pois estava apontanda para o document e o correto era o clicarBotoes()

        },
        comandoParaTotal(valor) { // caixa de resultado
            this.result.value += valor;
        }


        

    };

}
