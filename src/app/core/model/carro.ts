export class Carro {
    private cor: string;
    private modelo: string;
    private velocidade: number;

    constructor(cor: string, modelo: string) {
        this.cor = cor;
        this.modelo = modelo;
        this.velocidade = 0;
    }

   public acelera(){
        this.velocidade =+ 10;
    }

   public freia(){
        this.velocidade =- 8;
    }

    public virar(direcao: string){

    }

    getCor(){
        return this.cor;
    }

    setCor(cor: string){
        this.cor = cor;
    }

    getModelo(){
        return this.modelo;
    }

    setModelo(modelo: any){
        this.modelo = modelo;
    }

}