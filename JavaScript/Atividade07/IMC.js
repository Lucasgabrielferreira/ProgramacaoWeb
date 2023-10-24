
function imc(peso, altura){
    return peso / (altura * altura);
}
const IMC = imc(70, 1.73).toExponential();

switch(true) {
    case IMC < 16:
        console.log("Muito abaixo do peso.");
    break;
    case IMC >= 17 && IMC <= 18.4:
        console.log("Abaixo do peso.");
    break;
    case IMC >= 18.5 && IMC <= 24.9:
        console.log("Peso normal.");
    break;
    case IMC >= 25 && IMC <= 29.9:
        console.log("Acima do peso.");
    break;
    case IMC >= 30 && IMC <+ 34.9:
        console.log("Obesidade grau I.");
    break;
    case IMC >= 17 && IMC <= 18.4:
        console.log("Obesidade grau II.");
    break;
    case IMC >= 17 && IMC <= 18.4:
        console.log("Obesidade grau III.");
    break;
    default:
        console.log(`IMC digitado é inválido.`);
    break;
}