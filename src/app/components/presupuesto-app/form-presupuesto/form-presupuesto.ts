import {Component, output, signal} from '@angular/core';
import {Transaction} from '../../../types';

@Component({
  selector: 'app-form-presupuesto',
  imports: [],
  templateUrl: './form-presupuesto.html',
  styleUrl: './form-presupuesto.css',
})
export class FormPresupuesto {
  protected transaction = signal<Transaction>({id: 0, description: "", type: "", amount: 0});
  protected transaction_to_send = output<Transaction>();

  save_description_transaction(description: string) {
    this.transaction.update((data) => {
      return {
        ...data,
        description: description
      }
    });
  }

  save_type_transaction(type: string) {
    this.transaction.update((data) => {
      return {
        ...data,
        type: type
      }
    });
  }

  save_amount_transaction(amount: number) {
    this.transaction.update((data) => {
      return {
        ...data,
        amount: amount
      }
    });
  }

  protected add_transaction() {
    if (this.transaction().description == "" || this.transaction().type == "" || this.transaction().amount == 0) {
      alert("Por favor, llena los datos correctamente");
      return;
    }
    this.transaction.update((data) => {
      return {
        ...data,
        id: Math.floor(Math.random() * (1000000 - 100 + 1)) + 100
      }
    });
    this.transaction_to_send.emit(this.transaction());
  }
}
