import {Component, input, output, signal} from '@angular/core';
import {Character} from '../../../types';

@Component({
  selector: 'app-componente-hijo',
  imports: [],
  templateUrl: './componente-hijo.html',
  styleUrl: './componente-hijo.css',
})
export class ComponenteHijo {
  public character = input.required<Character>(); // * Input que recibe de componente padre
  public saludo = output<string>(); // ! Output que envia a componente padre

  get getCharacter() {
    return this.character;
  }

  send_message() {
    this.saludo.emit("Saludo desde componente hijo");
  }
}
