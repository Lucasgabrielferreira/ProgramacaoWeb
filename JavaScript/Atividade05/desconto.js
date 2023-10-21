let produto = prompt("Digite o valor do produto: ");
let voucher = prompt("Digite seu voucher: ");
let Resposta;

switch (voucher.toUpperCase()) {
    case "DESC1":
        let desconto = (5 / 100) * produto;
        alert(`O valor original do produto era de R$ ${produto}. Agora com desconto o produto sai à: ${produto - desconto}`);
    break;

    case "DESC2":
        let desconto1 = (10 / 100) * produto;
        alert(`O valor original do produto era de R$ ${produto}. Agora com desconto o produto sai à: ${produto - desconto1}`);
    break;

    case "DESC3":
        let desconto2 = (15 / 100) * produto;
        alert(`O valor original do produto era de R$ ${produto}. Agora com desconto o produto sai à: ${produto - desconto2}`);
    break;

    case "DESC4":
        let desconto3 = (20 / 100) * produto;
        alert(`O valor original do produto era de R$ ${produto}. Agora com desconto o produto sai à: ${produto - desconto3}`);
    break;

    case "DESC5":
        let desconto5 = (25 / 100) * produto;
        alert(`O valor original do produto era de R$ ${produto}. Agora com desconto o produto sai à: ${produto - desconto5}`);
    break;

    default:
        alert(`O Voucher digitado é inválido.`);
    break;
}

console.clear();



    