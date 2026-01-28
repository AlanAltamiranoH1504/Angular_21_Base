import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NuevoComponente} from './nuevo-componente/nuevo-componente';
import {ComponenteInline} from './componente-inline/componente-inline';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NuevoComponente, ComponenteInline],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Hola Mundo desde Angular Js');
  protected readonly name = "Alan Altamirano Hernández";
}
