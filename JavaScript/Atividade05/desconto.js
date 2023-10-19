let produto = prompt("Digite o valor do produto: ");
let voucher = prompt("Digite seu voucher: ");

switch (voucher) {
    case "DESC1":
        let desconto = (5 / 100) * produto;
        console.log(`valor original do produto R$ ${produto} e o valor com desconto é: ${desconto - produto}`); 
    break;
    
    case "DESC2":
        let desconto1 = (10 / 100) * produto;
        console.log(`valor original do produto R$ ${produto} e o valor com desconto é: ${desconto1 - produto}`);

    case "DESC3":
        let desconto2 = (15 / 100) * produto;
        console.log(`valor original do produto R$ ${produto} e o valor com desconto é: ${desconto2 - produto}`);

    case "DESC4":
        let desconto3 = (20 / 100) * produto;
        console.log(`valor original do produto R$ ${produto} e o valor com desconto é: ${desconto3 - produto}`);

    case "DESC5":
        let desconto5 = (25 / 100) * produto;
        console.log(`valor original do produto R$ ${produto} e o valor com desconto é: ${desconto5 - produto}`);

    default:
    console.log(`voucher invalido`);
    break;
}

console.clear();



    