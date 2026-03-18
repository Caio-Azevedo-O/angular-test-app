import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../signal-service';

@Component({
  selector: 'app-login-button',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './login-button.html',
  styleUrl: './login-button.scss',
})
export class LoginButton {
  @Output() loginClick = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();
  isLoggedIn = false;

  constructor(public auth: AuthService) {
    
  }
}
