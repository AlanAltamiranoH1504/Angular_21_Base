import {Component, output, signal} from '@angular/core';
import {Product} from '../../../types';

@Component({
  selector: 'app-form-add-product',
  imports: [],
  templateUrl: './form-add-product.html',
  styleUrl: './form-add-product.css',
})
export class FormAddProduct {
  protected product = signal<Product>({
    id: 0,
    name: "",
    price: 0
  });
  public productToAdd = output<Product>();

  protected saveNameProduct(value: string) {
    this.product.update((p) => {
      return {
        ...p,
        name: value
      }
    });
  }

  protected savePriceProduct(value: string) {
    this.product.update((p) => {
      return {
        ...p,
        price: Number(value)
      }
    })
  }

  protected addProduct() {
    if (this.product().name === "" || this.product().price === 0) {
      alert("Completa los campos");
    }
    this.productToAdd.emit(this.product());
  }
}
