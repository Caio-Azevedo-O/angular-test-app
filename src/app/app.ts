import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './module/home/home';
import { Contact } from './module/contact/contact';
import { Footer } from './shared-components/footer/footer';
import { Navbar } from './shared-components/navbar/navbar';
import { LoginButton } from './shared-components/login-button/login-button';
import { Login } from './shared-components/login/login';
import { CommonModule } from '@angular/common';

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
    Login
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('test-app');
  showLogin = false;
}
