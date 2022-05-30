// variaveis globais

const inputNovaTarefa = document.querySelector('.input-nova-tarefa');//input de texto principal
const caixaLi = document.querySelector('.tarefas');//ul
const btnAdiciona = document.querySelector('.btn-adiciona');//button


function criaLi() {
    //criando a li
    const li = document.createElement('li');
    li.classList.add('nova-tarefa');
    return li;//retornamos o li para usar para criar o botão
}    

function apagaInputPrincipal(){
    inputNovaTarefa.value = '';
    inputNovaTarefa.focus();
    //vai fazer o cursor piscar dentro da caixa input
    
};

function criaBotaoApagar(li){
    //criando o botão apagar
    li.innerText += ' ';
      let button = document.createElement('button');
      button.setAttribute('type', 'button');
      button.classList.add('botao-apagar');
      button.innerText = 'Apagar';
      li.appendChild(button);

}
inputNovaTarefa.addEventListener('keypress', function(e) {
     //capturando evento de teclas digitadas
     console.log(e); // testando o evento e descobrindo o num da tecla
    if (e.keyCode === 13/* codigo do botão enter */) {

     if (!inputNovaTarefa.value) return;
      criaTarefa(inputNovaTarefa.value);
      // *caso a caixa não esteja vazia retornar o valor para a função criaTarefa.
    }
   });


function criaTarefa(textoCapturado) {
   const li = criaLi();
   li.innerText= textoCapturado;
   caixaLi.appendChild(li);
    console.log(textoCapturado);
    apagaInputPrincipal();
    criaBotaoApagar(li);
}

btnAdiciona.addEventListener('click', function (params) {
    //capturando o click no button "adicionar tarefas"

    // alert('clicou') //teste
    if (!inputNovaTarefa.value) return
    //evitar que crie li's vazias com um if simples 
    
    criaTarefa(inputNovaTarefa.value);
})

