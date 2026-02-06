import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [
    FormsModule
  ],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  protected value1 = 0;
  protected value2 = 0;
  protected result = 0;

  result_operation() {
    this.result = Number(this.value1) + Number(this.value2);
  }
}
