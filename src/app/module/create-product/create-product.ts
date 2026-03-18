import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from '../products/products';
import { Product } from '../products/products';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [
    CommonModule,
    Products
  ],
  templateUrl: './create-product.html',
  styleUrl: './create-product.scss',
})
export class CreateProduct {
  
}
