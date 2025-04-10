import { Animal } from "./animal";

export class Cachorro extends Animal {
    override fazerbarulho(): void {
        console.log("O cachorro late!!")
    }
}