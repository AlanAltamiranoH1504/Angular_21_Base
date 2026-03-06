import {computed, Injectable, signal} from '@angular/core';
import {Transaction} from '../../types';

@Injectable({
  providedIn: 'root',
})
export class PresupuestoService {
  public income = signal(0);
  public expenses = signal(0);
  public initialAmount = computed(() => this.income() - this.expenses());
  public listTransactions = signal<Transaction[]>([]);

  public add_transaction(transaction: Transaction) {
    this.listTransactions.update((transactions) => {
      return [
        ...transactions,
        transaction
      ]
    });
    this.general_operations(transaction.amount, transaction.type);
  }

  public get_expenses() {
    return this.listTransactions().filter((transaction) => {
      return transaction.type === "egresoOperacion";
    });
  }

  public get_incomes() {
    return this.listTransactions().filter((transaction) => {
      return transaction.type === "ingresoOperacion"
    });
  }

  public general_operations(amount: number, type: string) {
    if (type === "ingresoOperacion") {
      this.income.update((value) => value + amount);
    } else {
      this.expenses.update((value) => value + amount);
    }
  }
}
