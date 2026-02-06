import {Component} from '@angular/core';

@Component({
  selector: 'app-show-message-component',
  imports: [],
  templateUrl: './show-message-component.html',
  styleUrl: './show-message-component.css',
})
export class ShowMessageComponent {
  private message = "";

  get mostrarMessage() {
    return this.message
  }

  showMessage() {
    this.message = "¡Hola, haz hecho click en el boton!"
  }

  resetMessage() {
    this.message = "";
  }
}
