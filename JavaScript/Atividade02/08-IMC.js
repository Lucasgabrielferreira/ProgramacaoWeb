prompt("Vamos medir o IMC?");
let altura = prompt("Digite sua altura em metros (Exemplo 1.75):");
let peso = prompt("Digite seu peso em quilogramas (exemplo 70 quilos):");

let imc = peso / (altura * altura);

if(imc >= 18.5 && imc <= 24.9){
    alert("Seu IMC está saudável.");
}else{
    alert("Seu IMC não está saudavel.")
}
