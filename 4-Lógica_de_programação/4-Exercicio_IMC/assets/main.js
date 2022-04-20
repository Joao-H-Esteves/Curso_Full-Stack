
function CalculoIMC() {
        
const formulario = document.querySelector('.formulario');
const resultEscrito = document.querySelector('.resul');

const peso = formulario.querySelector('#peso').value;
const alt = formulario.querySelector('#altura').value;

//calculo do imc
let imc;
imc = (peso / Math.pow (alt,2)).toFixed(2);//potenciação


 if (peso == undefined || peso == "" || peso == NaN) {
    
     const inputPeso = document.querySelector('#peso');
     inputPeso.style.background = 'red';
     inputPeso.innerText = 'Digite o peso!'// não funciona
     resultEscrito.innerHTML += '<p>Erro digite um valor válido para o peso </p>';
 }
 if (alt == undefined || alt == "" || alt == NaN) {
    const inputAlt = document.querySelector('#altura');
    inputAlt.style.background = 'red';
    inputAlt.innerHTML = 'Digite o peso!'// não funciona
    resultEscrito.innerHTML += '<p> Erro digite um valor válido para a altura </p>';
}

if (imc < 18.5) {
    document.querySelector('.linha2').style.background = 'blue';
    document.querySelector('.linha2').style.fontSize = '30px';
    document.querySelector('.linha2').style.color = 'white';
    console.log ('Abaixo do peso');

}else if( imc >= 18.5 && imc <= 24.9){
    console.log ('Abaixo do peso');

}else if( imc >= 25 && imc <= 29.9){
    console.log ('Sobrepeso');

}else if( imc >= 30 && imc <= 34.9){
    console.log ('Obesidade nivel 1');

}else if( imc >= 35 && imc <= 39.9){
    console.log ('Obesidade nivel 2');

}else if( imc >= 40){
    console.log ('Obesidade nivel 3');
    
}    

console.log (peso , alt, imc);

resultEscrito.innerHTML += `Seu IMC é ${imc}`;
}

// alert('teste');