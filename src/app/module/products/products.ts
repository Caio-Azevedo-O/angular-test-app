import { Component } from '@angular/core';
import {MatTable, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-products',
  imports: [MatTableModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  dataSource = [
    {name: 'Produto 1', price: 10.99, code: '303776'},
    {name: 'Produto 2', price: 19.99, code: '777556'},
    {name: 'Produto 3', price: 5.99, code: '442467'},
  ];

  displayedColumns = ['number', 'name', 'value', 'code'];
}
export class Product{
  name: string;
  price: number
  code: string;

  constructor(name: string, price: number, code: string) {
    this.name = name;
    this.price = price;
    this.code = code;
  }
}