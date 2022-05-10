/**
 ESCREVA UMA FUNÇÃO CHAMADA ePaisagem QUE RECEBA DOIS ARGUMENTOS
 LARGURA E ALTURA DE UMA IMAGEM(number).
 RETORNE TRUE SE A IMAGEM ESTIVER NO MODO PAISAGEM
 (LARG > ALT).
 */

 const ALT = 100;
 const LARG = 200;

 function ePaisagem(ALT , LARG) {
     return LARG > ALT ? true : false;     
 };

 console.log(ePaisagem(ALT , LARG));