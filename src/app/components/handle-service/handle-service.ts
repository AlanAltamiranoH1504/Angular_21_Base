import {Component, inject, Inject, Injectable, signal} from '@angular/core';
import {Formulario} from "../calculadora-output/formulario/formulario";
import {MensajeService} from '../../services/mensaje/mensaje';

@Component({
  selector: 'app-handle-service',
  imports: [
    Formulario
  ],
  templateUrl: './handle-service.html',
  styleUrl: './handle-service.css',
})
export class HandleService {
  protected messageService = inject(MensajeService);
  protected resultService = signal("");

  protected called_service() {
    this.resultService.set(this.messageService.get_message());
  }
}
