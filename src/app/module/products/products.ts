import { Component } from '@angular/core';
import {MatTable, MatTableModule} from '@angular/material/table';
import { ViewProducts } from '../../shared/view-products';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  imports: [MatTableModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  dataSource: any[] = [];

  subscription!: Subscription;

  constructor(public products: ViewProducts) {
    this.activateSubscription();
  }

  activateSubscription(): void {
    this.subscription = this.products.getProducts().subscribe((products) => {
      this.dataSource = products;
    });

  }
  deactivateSubscription(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  
  
  displayedColumns = ['number', 'name', 'value', 'code', 'actions'];
  
  ngOnDestroy(): void {
    this.deactivateSubscription();
  }
}
export class Product{
  name: string;
  price: number;
  code: string;

  constructor(name: string, price: number, code: string) {
    this.name = name;
    this.price = price;
    this.code = code;
  }
}