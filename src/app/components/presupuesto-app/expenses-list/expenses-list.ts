import {Component, computed, inject, input} from '@angular/core';
import {Transaction} from '../../../types';
import {CurrencyPipe, PercentPipe} from '@angular/common';
import {PresupuestoService} from '../../../services/presupuesto/presupuesto-service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-expenses-list',
  imports: [
    CurrencyPipe,
    PercentPipe,
    RouterLink
  ],
  templateUrl: './expenses-list.html',
  styleUrl: './expenses-list.css',
})
export class ExpensesList {
  public expensesTransactions = input.required<Transaction[]>();
  protected presupuestoService = inject(PresupuestoService);

  public delete_transaction(transactionId: number) {
    this.presupuestoService.removeTransaction(transactionId);
  }
}
