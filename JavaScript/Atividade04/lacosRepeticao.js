//Mostrar no console os números de 1 ao 50. (while)

let cont = 1;
while (cont <= 50) {
    console.log(`Numero ${cont}`);
    cont++;
}


//Mostrar no console contagem regressiva de 10 até 0.(do-while)

console.clear();
let l = 10, text = '';
do {
    text += `Contagem Regressiva = ${l}\n`;
    l--;
} while (l > 0);
console.log(text);


//Mostrar no console os números pares de 1 a 100. (for)
console.clear();
for (let i = 0; i < 100; i++){
    if (i % 2 === 0) {
        console.log(`Números pares: ${i}`);
    }
} 

