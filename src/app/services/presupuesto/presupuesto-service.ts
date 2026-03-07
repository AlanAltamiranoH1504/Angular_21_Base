import {computed, Injectable, signal} from '@angular/core';
import {Transaction} from '../../types';

@Injectable({
  providedIn: 'root',
})
export class PresupuestoService {
  public income = signal(0);
  public expenses = signal(0);
  public initialAmount = computed(() => this.income() - this.expenses());
  public percentage = computed(() => {
    if (this.income() === 0) return 0;
    return (this.expenses() / this.income())
  });
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

  public removeTransaction(transactionId: number) {
    const transaction = this.listTransactions().find((t) => {
      return t.id === transactionId
    });
    if (!transaction) {
      alert(`La transaccion con id ${transactionId} no esta registrada`);
    }

    const new_transactions = this.listTransactions().filter((t) => {
      return t.id !== transactionId;
    })
    this.listTransactions.set(new_transactions);

    if (transaction?.type === "ingresoOperacion") {
      this.income.update((value) => value - transaction!.amount);
    } else {
      this.expenses.update((value) => value - transaction!.amount);
    }
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

  public getExpensePercentage(amount: number) {
    const totalExpesesAmount = this.expenses();
    return amount / totalExpesesAmount;
  }
}
