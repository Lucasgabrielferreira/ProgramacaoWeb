// Funções
function mediaAluno(nota1 = 0, nota2 = 0, nota3 = 0) {
    return (nota1 + nota2 + nota3) / 3;
}

let falta = 3;

let media = mediaAluno(10, 5, 6);

if(media >= 6 && falta < 5) {
    console.log(`Aluno Aprovado!: nota ${media} e suas faltas são ${falta}`);
}else{
    console.log(`Aluno Reprovado!: nota ${media} e suas faltas são ${falta}`);
}





