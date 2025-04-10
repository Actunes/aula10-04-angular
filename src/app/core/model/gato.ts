import { Animal } from "./animal";

export class Gato extends Animal{
    override fazerbarulho(): void {
        console.log("O gato MIA!");
    }

}
