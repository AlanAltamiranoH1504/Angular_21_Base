import {Component, input} from '@angular/core';
import {Transaction} from '../../../types';

@Component({
  selector: 'app-income-list',
  imports: [],
  templateUrl: './income-list.html',
  styleUrl: './income-list.css',
})
export class IncomeList {
  public incomeTransactions = input.required<Transaction[]>();
}
