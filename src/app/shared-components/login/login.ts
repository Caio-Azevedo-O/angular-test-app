import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  @Output() loginSuccess = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();
  
  isLoggedIn = false;
  login(){
    this.close.emit();
    this.loginSuccess.emit();
  }
}
