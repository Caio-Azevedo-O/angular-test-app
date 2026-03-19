import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../module/products/products';

@Injectable({
  providedIn: 'root',
})
export class ViewProducts {
  private _products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  setProducts(products: Product[]): void {
    this._products.next(products);
  }
  
  getProducts() {
    return this._products.asObservable();
  }
  addProduct(product: Product): void {
    const currentProducts = this._products.getValue();
    this._products.next([...currentProducts, product]);
  }
  removeProduct(product: Product): void {
    const currentProducts = this._products.getValue();
    const updatedProducts = currentProducts.filter(p => p.code !== product.code);
    this._products.next(updatedProducts);
  }
  editProduct(updatedProduct: Product): void {
    const currentProducts = this._products.getValue();
    const updatedProducts = currentProducts.map(p => p.code === updatedProduct.code ? updatedProduct : p);
    this._products.next(updatedProducts);
  }
}
