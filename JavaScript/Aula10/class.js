// Classes
class Carro {
    constructor(marca, modelo, preco, ano, cor) {
    this.marca = marca;
    this.modelo = modelo;
    this.preco = preco;
    this.ano = ano;
    this.cor = cor;
    }
    }
    // Intanciando objetos à classe
    let meuCarro1 = new Carro('Ford', "k", 42.000, 2014, "Azul");
    let meuCarro2 = new Carro('Audi', "A3", 78.000, 2020, "Preto");
    let meuCarro3 = new Carro('GM', "Onix", 56.000, 2023, "Branco");

    console.log(meuCarro1);
    console.log(meuCarro2);
    console.log(meuCarro3);