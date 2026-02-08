import {Component, signal} from '@angular/core';
import {ComponenteHijo} from "../dedecorador-input/componente-hijo/componente-hijo";
import {Formulario} from './formulario/formulario';

@Component({
  selector: 'app-calculadora-output',
  imports: [
    ComponenteHijo,
    Formulario
  ],
  templateUrl: './calculadora-output.html',
  styleUrl: './calculadora-output.css',
})
export class CalculadoraOutput {
  protected result = signal<number>(0);

  save_result(result: number) {
    this.result.set(result);
  }
}
