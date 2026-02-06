import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class Hijo {
  private title = "Titulo de componente hijo";

  // ! Getter de Ts
  get mostrarTitle() {
    return this.title;
  }
}
