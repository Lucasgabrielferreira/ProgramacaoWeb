
function IMC(){
    let nome = document.querySelector('#nome');
    let peso = Number(document.querySelector('#peso').value);
    let altura = Number(document.querySelector('#altura').value);


    let calcular = document.querySelector('#calcular') //Aplicando elemento
    calcular.addEventListener('click', IMC) 
    let IMC = peso / (altura * altura);
    

    switch(true) {
    case IMC < 16:
        resultado.innerHTML = nome;
        resultado.innerHTML = "Muito abaixo do peso.";
    break;
    case IMC >= 17 && IMC <= 18.4:
        resultado.innerHTML = "Abaixo do peso.";
    break;
    case IMC >= 18.5 && IMC <= 24.9:
        resultado.innerHTML = "Peso normal.";
    break;
    case IMC >= 25 && IMC <= 29.9:
        resultado.innerHTML = "Acima do peso.";
    break;
    case IMC >= 30 && IMC <+ 34.9:
        resultado.innerHTML = "Obesidade grau I.";
    break;
    case IMC >= 17 && IMC <= 18.4:
        resultado.innerHTML = "Obesidade grau II.";
    break;
    case IMC >= 17 && IMC <= 18.4:
        resultado.innerHTML = "Obesidade grau III.";
    break;
    default:
        resultado.innerHTML = `IMC digitado é inválido.`;
    break;
    }
}