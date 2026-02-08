import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NuevoComponente} from './components/nuevo-componente/nuevo-componente';
import {ComponenteInline} from './componente-inline/componente-inline';
import {Interpolacion} from './components/interpolacion/interpolacion';
import {Padre} from './padre/padre';
import {Hijo} from './components/hijo/hijo';
import {ShowMessageComponent} from './components/show-message-component/show-message-component';
import {Replicador} from './components/replicador/replicador';
import {Saludar} from './components/saludar/saludar';
import {Calculator} from './components/calculator/calculator';
import {Auth} from './components/auth/auth';
import {LocalReference} from './components/local-reference/local-reference';
import {HomeworkFor} from './components/homework-for/homework-for';
import {ComponentePadre} from './components/dedecorador-input/componente-padre/componente-padre';
import {CalculadoraOutput} from './components/calculadora-output/calculadora-output';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NuevoComponente, ComponenteInline, Interpolacion, Padre, Hijo, ShowMessageComponent, Replicador, Saludar, Calculator, Auth, LocalReference, HomeworkFor, ComponentePadre, CalculadoraOutput],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Hola Mundo desde Angular Js');
  protected readonly name = "Alan Altamirano Hernández";
}
