import { Forma } from "./forma";

export class Circulo extends Forma{

    override calcularArea(): void {
        console.log('Calculou AREA CIRCULO')
    }
}
