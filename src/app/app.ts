import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NuevoComponente} from './nuevo-componente/nuevo-componente';
import {ComponenteInline} from './componente-inline/componente-inline';
import {Interpolacion} from './interpolacion/interpolacion';
import {Padre} from './padre/padre';
import {Hijo} from './hijo/hijo';
import {ShowMessageComponent} from './show-message-component/show-message-component';
import {Replicador} from './replicador/replicador';
import {Saludar} from './saludar/saludar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NuevoComponente, ComponenteInline, Interpolacion, Padre, Hijo, ShowMessageComponent, Replicador, Saludar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Hola Mundo desde Angular Js');
  protected readonly name = "Alan Altamirano Hernández";
}
