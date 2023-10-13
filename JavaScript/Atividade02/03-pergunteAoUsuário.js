//Qual o nome do usuário; 
// Qual sua idade; 
// Bairro onde mora; 
// Passe o nome do usuário para todas as letras em maiúscula;
// Crie um programa que solicite ao usuário que digite dois números inteiros e exiba o 
// resultado da soma desses números na tela.

let nome = prompt("Qual é seu nome? ");
let idade = prompt("Qual é sua idade? ");
let bairro = prompt("Qual é seu bairro? ");
alert(`Ola ${nome.toUpperCase()} Digite dois números`);
let numero1 = Number(prompt("Primeiro número? "));
let numero2 = Number(prompt("Segundo número? "));
alert(`A soma dos números é ${numero1 + numero2}`);