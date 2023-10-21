const numeroSorteado = Math.floor(Math.random() * 11);
let acertou = false;
let tentativas = 0;

while (!acertou) {
    const palpite = prompt("Digite um número de 0 a 10:");
    
    if (palpite === null) {
        // O usuário clicou em Cancelar
        break;
    }
    
    const numeroPalpite = parseInt(palpite);
    
    if (isNaN(numeroPalpite) || numeroPalpite < 0 || numeroPalpite > 10) {
        alert("Por favor, digite um número válido de 0 a 10.");
    } else {
        tentativas++;
        
        if (numeroPalpite === numeroSorteado) {
            acertou = true;
            alert(`Parabéns, você acertou! O número sorteado era ${numeroSorteado}. Você acertou em ${tentativas} tentativa(s).`);
        } else {
            alert("Tente novamente.");
        }
    }
}

if (!acertou) {
    alert(`O número sorteado era ${numeroSorteado}. O jogo acabou.`);
}