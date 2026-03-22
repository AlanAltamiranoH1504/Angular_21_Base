import {Component, input} from '@angular/core';

@Component({
  selector: 'app-mostrar-mensaje',
  imports: [],
  templateUrl: './mostrar-mensaje.html',
  styleUrl: './mostrar-mensaje.css',
})
export class MostrarMensaje {
    protected id = input<string | null>(null);
    protected nombre = input<string | null>(null);
    protected edad = input<string | null>(null);
}
