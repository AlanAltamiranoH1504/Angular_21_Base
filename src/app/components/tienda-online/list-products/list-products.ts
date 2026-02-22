import {Component, inject, input} from '@angular/core';
import {Product} from '../../../types';

@Component({
  selector: 'app-list-products',
  imports: [],
  templateUrl: './list-products.html',
  styleUrl: './list-products.css',
})
export class ListProducts {
  public productsList = input.required<Product[]>();
}
