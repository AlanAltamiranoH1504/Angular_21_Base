import {Component, inject, signal} from '@angular/core';
import {FormAddProduct} from './form-add-product/form-add-product';
import {ListProducts} from './list-products/list-products';
import {Product} from '../../types';
import {ProductsService} from '../../services/products/products';

@Component({
  selector: 'app-tienda-online',
  imports: [
    FormAddProduct,
    ListProducts
  ],
  templateUrl: './tienda-online.html',
  styleUrl: './tienda-online.css',
})
export class TiendaOnline {
  public productService = inject(ProductsService);

  saveProduct(product: Product) {
    this.productService.addProduct(product);
  }
}
