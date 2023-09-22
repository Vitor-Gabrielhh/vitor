class Animal {
    constructor(nome, cor) {
        this.nome = nome;
        this.cor = cor;
    }
    falar() {
        return `Olá meu nome é ${this.nome}.`
    }
}

class Cachorro extends Animal {
    constructor(nome, cor, raca) {
        super(nome, cor)
        this.raca = raca;
       
    }
    latir() {
    return `au auaauauauau`
}
}


class Gato extends Animal {
    constructor(nome, cor, raca) {
        super(nome, cor)
        this.raca = raca;
    }
    miar(){
        return `miauuu`
    }
}

const animais = [new Cachorro("fred" , "caramelo" , "Pastor Alemão"),
new Gato("Mia," , "Branco" , "Siamês")];

for(const Animal of animais){
    console.log(`Animal "${Animal.nome}" é ${Animal.cor}`);
}

for(const Animal of animais){
console.log(Animal.falar());
}

const cachorro = animais[0];
console.log(cachorro.latir());

const gato = animais[1];
console.log(gato.miar());
