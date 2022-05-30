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
      //button.classList.add('botao-apagar');//podia ser feito assim, porem vamos fazer dessa forma: 'setAttribute
      button.setAttribute('class', 'apagar');
      button.setAttribute('title','Apagar essa tarefa?'); //ao passa o mouse aparece a mensagem
      button.innerText = 'Apagar';
      li.appendChild(button);

}

document.addEventListener('click', function (event) {
    // mostra onde esta clicando no html
    const elemento = event.target;
    //console.log(elemento); //teste
    if (elemento.classList.contains('apagar')) {
        // se o botão com a class apagar for clicado:
        
    }
})

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

