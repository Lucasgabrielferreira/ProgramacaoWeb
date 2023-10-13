let idade = prompt("Digite a sua Idade:");

if(idade < 18){
    alert("Você é menor de idade.");
}else if (idade >= 18 && idade < 60){
    alert("Você é um aduto.")
}else{
    alert('Você é um idoso.')
}