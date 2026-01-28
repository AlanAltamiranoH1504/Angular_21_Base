import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  imports: [],
  templateUrl: './interpolacion.html',
  styleUrl: './interpolacion.css',
})
export class Interpolacion {
  protected title = "Universidad Angular";
  protected  usuario = {
    nombre: "Alan",
    apellidos: "Altamirano Hernández",
    edad: 24,
    puesto: "Desarrollador backend"
  };

  saludar() {
    return "Hola " + this.usuario.nombre + " " + this.usuario.apellidos;
  }
}
