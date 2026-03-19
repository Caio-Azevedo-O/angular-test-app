import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductContext } from '../../../ProductContext';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl:string = 'http://localhost:';

  /**
   *
   */
  constructor(private http:HttpClient) { }

  getById(id:number):Observable<ProductContext>{
    return this.http.get<ProductContext>(`${this.baseUrl}/product/search-id/${id}`);
  }
  getAll():Observable<ProductContext[]>{
    return this.http.get<ProductContext[]>(`${this.baseUrl}/product/search-all`);
  }
  updateProduct(id:number, newProduct: ProductContext):Observable<any>{
    return this.http.put(`${this.baseUrl}/product/update/${id}`, newProduct);
  }
  deleteProduct(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/product/delete/${id}`);
  }
}
