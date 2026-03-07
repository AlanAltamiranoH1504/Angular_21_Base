import {Component, inject} from '@angular/core';
import {CurrencyPipe, PercentPipe} from "@angular/common";
import {PresupuestoService} from '../../../services/presupuesto/presupuesto-service';

@Component({
  selector: 'app-header-presupuesto',
  imports: [
    CurrencyPipe,
    PercentPipe
  ],
  templateUrl: './header-presupuesto.html',
  styleUrl: './header-presupuesto.css',
})
export class HeaderPresupuesto {
  protected presupuestoService = inject(PresupuestoService);
}
