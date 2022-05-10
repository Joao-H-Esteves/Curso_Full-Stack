/**
 ESCREVA UMA FUNÇÃO CHAMADA ePaisagem QUE RECEBA DOIS ARGUMENTOS
 LARGURA E ALTURA DE UMA IMAGEM(number).
 RETORNE TRUE SE A IMAGEM ESTIVER NO MODO PAISAGEM
 (LARG > ALT).
 */

 let ALT = 1000; //altura da imagem
 let LARG = 200; //largura da imagem

 function ePaisagem(ALT , LARG) {
     return LARG > ALT ? true : false;     
 }; 

 console.log(ePaisagem(ALT , LARG));// false

 //============================================

 //cod do professor:

 //ARROW FUNCTIOn
 
 const Epaisagem = (ALT , LARG) => LARG > ALT ;
 console.log(Epaisagem(1200 , 1920)); //true
