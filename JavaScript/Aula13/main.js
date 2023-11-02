let calcular = document.querySelector('#calcular') //Aplicando elemento
calcular.addEventListener('click', mediaAluno) //Escutador

function mediaAluno(){
    let nota1 = Number(document.querySelector('#nt1').value);
    let nota2 = Number(document.querySelector('#nt2').value);
    let resultado = document.querySelector('#txt')
    let media = (nota1 + nota2) / 2;
    resultado.innerHTML = `A Média é: ${media}`;


}