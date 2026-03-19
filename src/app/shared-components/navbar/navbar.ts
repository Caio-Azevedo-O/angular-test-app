import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { AuthService } from '../../shared/auth-service';
import { LoginButton } from '../login-button/login-button';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    MatIconModule,
    LoginButton
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isLoggedIn = false;

  @Output() loginClick = new EventEmitter<void>();

  constructor(public auth: AuthService) {
    this.isLoggedIn = this.auth.isAuthenticated();
  }
}
