  import {Component, inject} from '@angular/core';
  import {ListPersons} from '../handle-persons-service/list-persons/list-persons';
  import {CurrencyPipe, DatePipe, UpperCasePipe} from '@angular/common';
  import {EmpleadosService} from '../../services/empleados/empleados';

  @Component({
    selector: 'app-pipes',
    imports: [
      ListPersons,
      UpperCasePipe,
      DatePipe,
      CurrencyPipe
    ],
    templateUrl: './pipes.html',
    styleUrl: './pipes.css',
  })
  export class Pipes {
    protected empleadosService = inject(EmpleadosService);
    protected empleados = this.empleadosService.empleados();
  }
