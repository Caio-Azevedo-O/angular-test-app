import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from '../products/products';
import { Product } from '../products/products';
import { FormsModule } from '@angular/forms';
import { CreateProductService } from '../../shared/create-product-service';
import { ViewProducts } from '../../shared/view-products';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [
    CommonModule,
    Products,
    FormsModule
  ],
  templateUrl: './create-product.html',
  styleUrl: './create-product.scss',
})
export class CreateProduct {
  productName: string = '';
  productPrice: number = 0;
  productCode: string = '';

  subscription!: Subscription;

  constructor(private product: CreateProductService, private products: ViewProducts) {
    product.setProduct(new Product('', 0, ''));
  }
  createProduct(): void {
    const newProduct: Product = {
      name: this.productName,
      price: this.productPrice,
      code: this.productCode
    };
    console.log('Product created:', newProduct);

    this.product.setProduct(newProduct);
    this.products.addProduct(newProduct);
    
    this.productName = '';
    this.productPrice = 0;
    this.productCode = '';
  }

  focusNext(next: HTMLElement | HTMLTextAreaElement){
    next.focus();
  }
}
