import {Component, inject, input} from '@angular/core';
import {Transaction} from '../../../types';
import {CurrencyPipe, UpperCasePipe} from '@angular/common';
import {PresupuestoService} from '../../../services/presupuesto/presupuesto-service';

@Component({
  selector: 'app-income-list',
  imports: [
    UpperCasePipe,
    CurrencyPipe
  ],
  templateUrl: './income-list.html',
  styleUrl: './income-list.css',
})
export class IncomeList {
  public incomeTransactions = input.required<Transaction[]>();
  public presupuestoService = inject(PresupuestoService);

  public delete_transaction(transactionId: number) {
    this.presupuestoService.removeTransaction(transactionId);
  }
}
