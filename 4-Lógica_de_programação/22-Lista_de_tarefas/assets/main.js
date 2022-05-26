// alert('teste');
const inputPrincipal = document.querySelector('.input-nova-tarefa');//input
const caixaLi = document.querySelector('.tarefas');//ul
const adiciona = document.querySelector('.btn-adiciona');//button


function criaLi() {
    let li = document.createElement('li');
    let button = document.createElement('button');

    caixaLi.appendChild(li);
    li.innerHTML += 'teste';
    caixaLi.append(button);
}

adiciona.addEventListener('click', function (params) {
    // alert('clicou')
    criaLi();
})