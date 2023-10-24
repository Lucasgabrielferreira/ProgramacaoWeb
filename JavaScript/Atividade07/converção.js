
function converção(real, euro){
    return real / euro;
}

let real = 11.00;
let euro = 5.30;

console.log(`valor em euro R$:${converção(real, euro)}`);