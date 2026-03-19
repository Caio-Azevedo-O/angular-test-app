import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../module/products/products';

@Injectable({
  providedIn: 'root',
})
export class CreateProductService {
  private _product: BehaviorSubject<Product> = new BehaviorSubject<Product>(new Product('', 0, ''));

  setProduct(product: Product): void {
    this._product.next(product);
  }

  getProduct() {
    return this._product.asObservable();
  }
}
