import { Routes } from '@angular/router';
import { Home } from './module/home/home';
import { Contact } from './module/contact/contact';
import { Products } from './module/products/products';
import { CreateProduct } from './module/create-product/create-product';

export const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home",component: Home},
    {path: "contact",component: Contact},
    {path: "products", component: Products},
    {path: "create-product",component: CreateProduct}
];
