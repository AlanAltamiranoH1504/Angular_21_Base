import {Component, input} from '@angular/core';
import {Transaction} from '../../../types';
import {CurrencyPipe, UpperCasePipe} from '@angular/common';

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
}
