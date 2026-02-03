import { Component } from '@angular/core';

@Component({
  selector: 'app-replicador',
  imports: [],
  templateUrl: './replicador.html',
  styleUrl: './replicador.css',
})
export class Replicador {
    protected texto = "";

    updateText(event: Event) {
      const elementoInput = event.target as HTMLInputElement;
      this.texto = elementoInput.value;
    }
}
