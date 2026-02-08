import {Component, signal} from '@angular/core';
import {ComponenteHijo} from '../componente-hijo/componente-hijo';
import {Character} from '../../../types';

@Component({
  selector: 'app-componente-padre',
  imports: [
    ComponenteHijo
  ],
  templateUrl: './componente-padre.html',
  styleUrl: './componente-padre.css',
})
export class ComponentePadre {
  public characterObject: Character = {
    name: "Vegeta",
    description: "Personaje de Dragon Ball",
    power: 9000
  }
  public saludo_hijo = signal("");
  public character = signal<Character>(this.characterObject);


  recibir_saludo(saludo: string) {
    this.saludo_hijo.set(saludo);
  }
}
