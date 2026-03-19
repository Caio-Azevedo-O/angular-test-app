import { Component, EventEmitter, Output} from '@angular/core';
import { ViewProducts } from '../../shared/view-products';

@Component({
  selector: 'app-edit-product',
  imports: [],
  templateUrl: './edit-product.html',
  styleUrl: './edit-product.scss',
})
export class EditProduct {
  @Output() close = new EventEmitter<void>();
  productName!: string;
  productValue!: number;

  /**
   *
   */
  constructor(public products: ViewProducts) {
    
  }
}
