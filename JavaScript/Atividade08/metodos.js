let funcionarios = [
    {
        id: 1,
        nome: 'Lucas',
        salario: 8000,
    },
    {
        id: 2,
        nome: 'Wally',
        salario: 4800,
    },
    {
        id: 3,
        nome: 'Gabriel',
        salario: 1000,
    },
    {
        id: 4,
        nome: 'Ferreira',
        salario: 3000,
    },
    {
        id: 5,
        nome: 'Victor',
        salario: 5000,
    },
];

funcionarios.forEach((funcionarioss) => {
    console.log(funcionarioss.nome);
    console.log(`Salario: ${funcionarioss.salario}`);
});


let reajuste = funcionarios.map((funcionarioss) => {

    return funcionarioss.salario * 1.05;
});
console.log(`Novos salarios após reajuste de 5% ${reajuste}`);