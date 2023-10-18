let carros = ["Celta", "Uno", "Gol"]
let gruposTcc = [
    ["Gabriel", "Daniel"],
    ["Beijamin", "Dias"],
    ["Lucas", "Davi"],
]

console.log(carros.length);
console.log(carros[1]);
console.log(typeof gruposTcc[1][1]);

carros [0] = "BMW"
carros [1] = "lamborghini"
carros [2] = "porsche"
console.log(carros);


let idadeAluno = [15, 25, 16, 22, 18]

// console.log(typeof idadeAluno [2]);

let idadetexto = idadeAluno.toString();
console.log(idadetexto.length);
let novoArray = idadeAluno.join(" - ");
console.log(novoArray);