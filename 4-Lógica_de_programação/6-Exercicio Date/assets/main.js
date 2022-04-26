// APARECER O DIA DA SEMANA + DIA + MES (EXTENSO) + ANO + HORÁRIO USANDO js DENTRO DE UM CONTEINER HTML

//MINHA SOLUÇÃO
const data= new Date();
const diaSemana = data.toLocaleString('pt-BR', {weekday: 'long'}); //função nativa para semana
const dataLonga = data.toLocaleDateString('pt-BR',{dateStyle: 'long'});//função nativa para a data
const horas = data.getHours();
const min =  data.getMinutes('2-digit');

const trocaData = document.querySelector('h1');
const trocaHora = document.querySelector('h2');

trocaData.innerHTML = `${diaSemana} , ${dataLonga} `;
trocaHora.innerHTML = `${horas}:${min}`;


