import {Injectable, signal} from '@angular/core';
import {Empleado} from '../../types';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  public empleados = signal<Empleado[]>([
    {id_empleado: 1, nombre: "Gustavo Flores", sueldo: 13200, fechaNacimiento: "2026-11-03"},
    {id_empleado: 2, nombre: "Mario Morelos", sueldo: 23000, fechaNacimiento: "2026-11-03"},
    {id_empleado: 3, nombre: "Alan Altamirano", sueldo: 13200, fechaNacimiento: "2002-04-15"}
  ]);
}
