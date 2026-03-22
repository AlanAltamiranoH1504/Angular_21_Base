import {Component, inject} from '@angular/core';
import {PresupuestoService} from '../../services/presupuesto/presupuesto-service';
import {CurrencyPipe} from '@angular/common';
import {HeaderPresupuesto} from './header-presupuesto/header-presupuesto';
import {FormPresupuesto} from './form-presupuesto/form-presupuesto';
import {IncomeList} from './income-list/income-list';
import {ExpensesList} from './expenses-list/expenses-list';
import {Transaction} from '../../types';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-presupuesto-app',
  imports: [
    CurrencyPipe,
    HeaderPresupuesto,
    FormPresupuesto,
    IncomeList,
    ExpensesList,
    RouterOutlet
  ],
  templateUrl: './presupuesto-app.html',
  styleUrl: './presupuesto-app.css',
})
export class PresupuestoApp {
  protected presupuestoService = inject(PresupuestoService);

  public expensesList() {
    return this.presupuestoService.get_expenses()
  }

  public incomeList() {
    return this.presupuestoService.get_incomes();
  };

  add_transaction(transaction: Transaction) {
    this.presupuestoService.add_transaction(transaction);
  }
}
