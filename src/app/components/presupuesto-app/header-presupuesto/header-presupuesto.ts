import {Component, inject} from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import {PresupuestoService} from '../../../services/presupuesto/presupuesto-service';

@Component({
  selector: 'app-header-presupuesto',
    imports: [
        CurrencyPipe
    ],
  templateUrl: './header-presupuesto.html',
  styleUrl: './header-presupuesto.css',
})
export class HeaderPresupuesto {
  protected presupuestoService = inject(PresupuestoService);
}
