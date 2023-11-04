let calcular = document.querySelector('#calcular'); 
calcular.addEventListener('click', calcularIMC);


function calcularIMC() {
    let nome = document.querySelector('#nome').value;
    let peso = Number(document.querySelector('#peso').value);
    let altura = Number(document.querySelector('#altura').value);
    let resultado = document.querySelector('#resultado');

    let IMC = peso / (altura * altura) ;
    
   
    switch (true) {
        case IMC < 16:
            resultado.innerHTML = `${nome} Você está Muito abaixo do peso.`;
            break;
        case IMC >= 16 && IMC <= 16.9:
            resultado.innerHTML = `${nome} Você está Abaixo do peso.`;
            break;
        case IMC >= 17 && IMC <= 18.4:
            resultado.innerHTML = `${nome} Você está Abaixo do peso.`;
            break;
        case IMC >= 18.5 && IMC <= 24.9:
            resultado.innerHTML = `${nome} Você está com Peso normal.`;
            break;
        case IMC >= 25 && IMC <= 29.9:
            resultado.innerHTML = `${nome} Você está Acima do peso.`;
            break;
        case IMC >= 30 && IMC <= 34.9:
            resultado.innerHTML = `${nome} Você está com Obesidade grau I.`;
            break;
        case IMC >= 35 && IMC <= 39.9:
            resultado.innerHTML = `${nome} Você está com Obesidade grau II.`;
            break;
        case IMC >= 40:
            resultado.innerHTML = `${nome} Você está com Obesidade grau III.`;
            break;
        default:
            resultado.innerHTML = `${nome} IMC digitado é inválido.`;
            break;
    }
}


