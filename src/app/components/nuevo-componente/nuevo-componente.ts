import { Component } from '@angular/core';

@Component({
  selector: 'app-nuevo-componente',
  imports: [],
  templateUrl: './nuevo-componente.html',
  styleUrl: './nuevo-componente.css',
})
export class NuevoComponente {
  protected  tituloNuevoComponente = "Nuevo componente";
  protected paises = ["Mexico", "Canada", "Brasil", "Alemania"];
}
