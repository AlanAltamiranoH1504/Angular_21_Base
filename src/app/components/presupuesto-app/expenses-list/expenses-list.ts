import {Component, input} from '@angular/core';
import {Transaction} from '../../../types';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-expenses-list',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './expenses-list.html',
  styleUrl: './expenses-list.css',
})
export class ExpensesList {
  public expensesTransactions = input.required<Transaction[]>();
}
