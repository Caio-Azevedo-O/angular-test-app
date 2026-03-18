import { Routes } from '@angular/router';
import { Home } from './module/home/home';
import { Contact } from './module/contact/contact';

export const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home",component: Home},
    {path: "contact",component: Contact}
];
