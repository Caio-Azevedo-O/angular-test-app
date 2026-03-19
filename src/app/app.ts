import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './module/home/home';
import { Contact } from './module/contact/contact';
import { Footer } from './shared-components/footer/footer';
import { Navbar } from './shared-components/navbar/navbar';
import { LoginButton } from './shared-components/login-button/login-button';
import { Login } from './shared-components/login/login';
import { CommonModule } from '@angular/common';
import { Products } from './module/products/products';
import { CreateProduct } from './module/create-product/create-product';
import { FormsModule } from '@angular/forms';
import { AuthService } from './shared/auth-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    Home,
    Contact,
    Footer,
    Navbar,
    LoginButton,
    Login,
    Products,
    CreateProduct,
    FormsModule,
    HttpClient
  ],
  templateUrl: './app.html',
  styleUrls: [
    './app.scss'
  ]
})
export class App implements OnInit{

  showLogin!: boolean;
  constructor(private auth: AuthService) {
  }
  
  ngOnInit(): void {
    this.showLogin = false;    
  }
  protected readonly title = signal('test-app');
}
