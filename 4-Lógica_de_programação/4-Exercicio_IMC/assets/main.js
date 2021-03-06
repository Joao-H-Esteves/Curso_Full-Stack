const formulario = document.querySelector('.formulario');
const resultEscrito = document.querySelector('.resul');
const inputAlt = formulario.querySelector('#altura');
const inputPeso= formulario.querySelector('#peso');
const peso = Number(inputPeso.value);
const alt = Number(inputAlt.value);

let imc = getIMC(peso , alt); // function para calc o imc(linha20)

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    //impedir o envio do formulario e o refresh.
});


function getIMC(peso, alt) {//calculo do imc;
    let imc = (peso / Math.pow(alt, 2));//potenciação
    
    return imc.toFixed(2);
}

console.log(peso, alt, imc);
function CalculoIMC(imc, peso , alt) {
    
    let diagnostico;
    
    if (peso == undefined || peso == "" || peso == NaN) {
         
          const inputPeso = document.querySelector('#peso');
          inputPeso.style.background = 'red';
          //inputPeso.innerText = 'Digite o peso!'// não funciona
          resultEscrito.innerHTML += '<p>Erro digite um valor válido para o peso </p>';
          
      }
    
    
  
    if (alt == undefined || alt == "" || alt == NaN) {
        const inputAlt = document.querySelector('#altura');
        inputAlt.style.background = 'red';
        //inputAlt.innerHTML = 'Digite a altura!'// não funciona
        resultEscrito.innerHTML += '<p> Erro digite um valor válido para a altura </p>';
        
    }

    if (imc < 18.5) {
        mudaLinha(1)
        diagnostico = 'Abaixo do peso';

    } else if (imc >= 18.5 && imc <= 24.9) {
        mudaLinha(2)
        diagnostico = 'Peso Normal';

    } else if (imc >= 25 && imc <= 29.9) {
        mudaLinha(3)
        diagnostico = 'Sobrepeso';

    } else if (imc >= 30 && imc <= 34.9) {
        mudaLinha(4)
        diagnostico = 'Obesidade nivel 1';

    } else if (imc >= 35 && imc <= 39.9) {
        mudaLinha(5)
        diagnostico = 'Obesidade nivel 2';

    } else if (imc >= 40) {
        mudaLinha(6)
        diagnostico = 'Obesidade nivel 3';

    }

    console.log(typeof peso);
    console.log(typeof alt);
    console.log(typeof imc);

    resultEscrito.innerHTML += `Seu IMC é ${imc} , logo esta com ${diagnostico} .`;
}

function mudaLinha(x) { // Usa o numero da tr como paramentro (0 a 6)
    document.getElementsByTagName('tr')[x].style.background = 'blue';
    document.getElementsByTagName('tr')[x].style.fontSize = '30px';
    document.getElementsByTagName('tr')[x].style.color = 'white';
}

    