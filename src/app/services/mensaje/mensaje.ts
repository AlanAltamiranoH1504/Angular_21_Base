import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MensajeService {
  private message = signal("Hola desde el servicio de mensajes");

  public get_message() {
    return this.message();
  }
}
