import {computed, inject, Injectable, signal} from '@angular/core';
import {Transaction} from '../../types';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PresupuestoService {
  protected http = inject(HttpClient);
  public income = signal(0);
  public expenses = signal(0);
  public initialAmount = computed(() => this.income() - this.expenses());
  public percentage = computed(() => {
    if (this.income() === 0) return 0;
    return (this.expenses() / this.income())
  });
  public listTransactions = signal<Transaction[]>([]);

  constructor() {
    this.http.get<Transaction[]>("http://localhost:8080/transactions").subscribe((res) => {
      this.listTransactions.set(res);
    })
  }

  public add_transaction(transaction: Transaction) {
    this.http.post("http://localhost:8080/transactions", transaction).subscribe((res) => {
      this.loadTransactions();
    })
    // this.listTransactions.update((transactions) => {
    //   return [
    //     ...transactions,
    //     transaction
    //   ]
    // });
    this.general_operations(transaction.amount, transaction.type);
  }

  public updateTransaction(transaction: Transaction) {
    this.http.put(`http://localhost:8080/transactions/${transaction.id}`, transaction).subscribe((res) => {
      this.loadTransactions();
    })
    // const transactionToUpdate = this.getTransaction(transaction.id);
    // this.listTransactions.update((transactions) =>
    //   transactions.map(t =>
    //     t.id === transaction.id ? transaction : t
    //   )
    // );
  }

  public removeTransaction(transactionId: number) {
    this.http.delete(`http://localhost:8080/transactions/${transactionId}`).subscribe((res) => {
      this.loadTransactions();
    })
    // const transaction = this.listTransactions().find((t) => {
    //   return t.id === transactionId
    // });
    // if (!transaction) {
    //   alert(`La transaccion con id ${transactionId} no esta registrada`);
    // }
    //
    // const new_transactions = this.listTransactions().filter((t) => {
    //   return t.id !== transactionId;
    // })
    // this.listTransactions.set(new_transactions);
    //
    // if (transaction?.type === "ingresoOperacion") {
    //   this.income.update((value) => value - transaction!.amount);
    // } else {
    //   this.expenses.update((value) => value - transaction!.amount);
    // }
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

  public getTransaction(transactionId: number) {
    return this.listTransactions().find((transaction) => {
      return transaction.id === transactionId;
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

  public loadTransactions() {
    this.http.get<Transaction[]>("http://localhost:8080/transactions")
      .subscribe((res) => {
        this.listTransactions.set(res);
      });
  }
}
