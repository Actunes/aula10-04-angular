export class Animal {
    nome: string;

    constructor(nome: string){
        this.nome = nome;
    }

    fazerbarulho(){
        console.log("Animal faz algum tipo de barulho!");
    }

}