import {Injectable, signal} from '@angular/core';
import {Product} from '../../types';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public products = signal<Product[]>([]);

  addProduct(product: Product) {
    this.products.update((p) => {
      return [...p, product];
    });
  }
}
