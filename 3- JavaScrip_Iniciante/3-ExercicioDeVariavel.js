/*
JOÃO ESTEVES tem xx anos , pesa 82 kg tem 1.79 m de altura e seu IMC é de xx.xx.
O sr Esteves esta com o peso ok?.
*/
const primeiroNome = 'João';
const ultimoNome = 'Esteves';
const anoNasc = 1984;
const alt = 1.79;
const peso = 82;
let anoAtual= new Date().getFullYear() // ano atual da maquina
let idade;
let imc; //= peso /(altura ^2)
let imcResult

idade = anoAtual - anoNasc;
imc = peso / Math.pow (alt,2);//potenciação

if (imc <= 20.7) {
    imcResult = 'Está abaixo do peso'
}
if (imc >20.7 && imc <= 26.4) {
    imcResult = 'Está com o peso normal'
}
if (imc >26.4 && imc <= 27.8) {
    imcResult = 'Está com sobre peso, precisa emagrecer'
}
console.log(`O ${primeiroNome} ${ultimoNome} possui ${idade} anos, tem ${alt} m de altura e pesa ${peso} kgs.`)
console.log(` O senhor ${ultimoNome} possui IMC de ${imc}. ${imcResult}`);