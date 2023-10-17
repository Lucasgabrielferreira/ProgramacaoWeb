
const frutas = ["Banana", "Maçã", "Laranja", "Melancia", " Abacaxi com hortelã"];

console.log(`As frutas recebidas foram: ${frutas.join(", ")}.`);

console.log(`A quantidade de letras em cada uma das frutas é: ${frutas.map(fruta => fruta.length).join(", ")}.`);
console.log(`Limpando caracter em branco do início: ${frutas.map(fruta => fruta.trim())}.`);

console.log(`Mostrar os 3 primeiros caracteres de cada Fruta: ${frutas.map(fruta => fruta.substring(0, 3))}.`);

console.log(`Mostrar as Frutas em caixa baixa: ${frutas.map(fruta => fruta.toLowerCase())}.`);


