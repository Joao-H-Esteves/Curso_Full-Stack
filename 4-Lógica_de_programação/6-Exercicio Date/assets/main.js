// APARECER O DIA DA SEMANA + DIA + MES (EXTENSO) + ANO + HORÁRIO USANDO js DENTRO DE UM CONTEINER HTML

//MINHA SOLUÇÃO
const data= new Date();
const diaSemana = data.toLocaleString('pt-BR', {weekday: 'long'}); //função nativa para semana
const mesLongo = data.toLocaleDateString('pt-BR',{month: 'long'});//função nativa para o mes
const dia = data.getDay();
let diaComZero = dia <10 ? `0${dia}` : dia ;
const ano = data.getFullYear();
const horaAtual =  data.toLocaleTimeString('pt-BR')

const trocaData = document.querySelector('h1');
const trocaHora = document.querySelector('h2');

trocaData.innerHTML = `${diaSemana} , ${diaComZero} de ${ mesLongo} de ${ano}`;
trocaHora.innerHTML = `${horaAtual}`