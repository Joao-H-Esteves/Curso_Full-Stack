/**
OPERADOR TERNARIO

(condição) ? valor para TRUE : valor para FALSE
  __?__:__

 */
//SABER SE O USUARIO É VIP:

const pontuacaoUsuario = 999;

if (pontuacaoUsuario >= 1000) {
    console.log('Usuario VIP');
}else{
    console.log('Usuario normal');
}

// Encurtando o codigo

const pontUsuario = 1000;
const nivelUsuario = pontUsuario >= 1000 ?'Usuario VIP': 'Usuario normal';

console.log (nivelUsuario);