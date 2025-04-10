import { Component } from '@angular/core';
import { Carro } from './core/model/carro';
import { Animal } from './core/model/animal';
import { Cachorro } from './core/model/cachorro';
import { Gato } from './core/model/gato';
import { Retangulo } from './core/model/retangulo';
import { Circulo } from './core/model/circulo';
import { Forma } from './core/model/forma';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web';

  meuCarro: Carro;

  constructor() {

///

    const retangulo = new Retangulo(1,2)
    const circulo = new Circulo(1,2)

    this.calcularArea(retangulo);




///

    this.meuCarro = new Carro('Vermelho', 'Civic');
    console.log('== Carro ==');
    console.log('Cor:', this.meuCarro.getCor);
    console.log('Modelo', this.meuCarro.getModelo);

    const meuCachorro = new Cachorro("REX");
    const meuGato = new Gato("Frajola");
    const meuAnimal = new Animal('Cavalo')
    this.fazerSomDoAnimal(meuGato);
    this.fazerSomDoAnimal(meuCachorro);
    this.fazerSomDoAnimal(meuAnimal)
  }

  mudarCor(){
    this.meuCarro.setCor('AZUL');
  }

  fazerSomDoAnimal(animal: Animal){
    animal.fazerbarulho();
  }

  calcularArea(retangulo: Retangulo){
  }

}
