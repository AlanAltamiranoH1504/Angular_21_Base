import {Component, output, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [
    FormsModule
  ],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  protected value1 = signal(0);
  protected value2 = signal(0);
  protected result_to_send = output<number>();

  send_result() {
    const result = Number(this.value1()) + Number(this.value2());
    this.result_to_send.emit(result);
  }
}
