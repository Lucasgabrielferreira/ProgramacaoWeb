let alunos = [{
    id: 1,
    nome: 'Lucas',
    sobrenome: 'Gabriel',
    idade: 10,
    corDosOlhos: 'castanlhos',
    hobbies: ['música', 'filmes', 'esportes'],
    notas: [
        10,
        10,
        10,
        10,
        10,
   ],
    endereco: {
        rua: 'Rua do IOS',
        numero: 10,
        cidade: 'São Paulo',
        estado: 'SP',
    },

}, {
    id: 2,
    nome: 'Gabriel',
    sobrenome: 'Ferreira',
    idade: 10,
    corDosOlhos: 'castanhos claros',
    hobbies: ['música', 'filmes', 'esportes'],
    notas: [
        10,
        9,
        8,
        7,
        6,
   ],
    endereco: {
        rua: 'AV. IOS',
        numero: 20,
        cidade: 'São Paulo',
        estado: 'SP',
    },
}, {
    id: 3,
    nome: 'Amanda',
    sobrenome: 'Ferraz',
    idade: 10,
    corDosOlhos: 'castanho claro mel',
    hobbies: ['música', 'filmes', 'esportes'],
    notas: [
         10,
         9,
         8,
         7,
         6,
    ],
    endereco: {
        rua: 'Travessa IOS',
        numero: 30,
        cidade: 'São Paulo',
        estado: 'SP',
    }

}

];

for (let i of alunos) {

    let soma = 0;
    for (let nota of i.notas) {
        soma += nota;
    }

    let media = soma / i.notas.length;

    console.log(`Aluno ${i.nome} ${i.sobrenome}, Tem ${i.idade} anos, Com notas: ${i.notas}, Endereço: ${i.endereco.rua} Nº${i.endereco.numero}, e teve a media: ${media} `)

}



   