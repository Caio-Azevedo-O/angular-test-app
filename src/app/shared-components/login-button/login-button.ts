import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-button',
  imports: [CommonModule],
  templateUrl: './login-button.html',
  styleUrl: './login-button.scss',
})
export class LoginButton {
  @Output() loginClick = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();
  isLoggedIn = false;
}
