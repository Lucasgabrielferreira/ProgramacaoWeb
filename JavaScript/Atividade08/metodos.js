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

funcionarios.forEach((funcionario) => {
    console.log(`${funcionario.nome}, Salario: ${funcionario.salario}`);
});


let reajuste = funcionarios.map((funcionario) => {

    return{
        nome: funcionario.nome,
        salario: funcionario.salario * 1.05
    }

});


console.log('Novos salários após o reajuste de 5%:');
reajuste.forEach((funcionario) => {
  console.log(`${funcionario.nome}, Salario: ${funcionario.salario}`);
});

let salarioMaisDe5000 = reajuste.filter(funcionario => funcionario.salario > 5000);

console.log(`Salarios Maior que 5.000:`);
console.log(salarioMaisDe5000);

let wally = salarioMaisDe5000.find(funcionario => funcionario.nome === 'Wally');

if (wally) {
    console.log('Você encontrou o Wally!');
  } else {
    console.log('Wally não foi encontrado.');
}
