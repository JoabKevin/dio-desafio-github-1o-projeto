class Carro {
    marca;
    cor;
    consumoKm;

    constructor(marca, cor, consumoKm) {
        this.marca = marca;
        this.consumoKm = consumoKm;
        this.cor = cor;
    }
    
    calcularViagem (dist, precoComb) {
        return this.consumoKm * dist * precoComb
    }    
}


const civic = new Carro ('Honda', 'preto', 1/12.5);
const gol = new Carro ('VW', 'cinza', 1/14);
let viagemGol = gol.calcularViagem(400, 4.99);
console.log('Preço da viagem (gol): ', viagemGol);
let viagemCivic = civic.calcularViagem(400, 4.99);
console.log('Preço da viagem: (civic)', viagemCivic);