import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth-service';
import { UserContext } from '../../UserContext';


@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  @Output() loginSuccess = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();
  
  constructor(private auth: AuthService, private router: Router) {

  }

  username: string = "";
  password: string = "";

  isLoggedIn = false;
  failedToLogin = false;

  focusNext(next: HTMLElement | HTMLTextAreaElement){
    console.log(next);
    next.focus();
  }

  login() {
    console.log("Login attempt with user:", this.username, "and password:", this.password);
    const user = new UserContext(this.username, this.password, '', false);
    this.auth.authenticateUser(user);
    if (this.auth.isAuthenticated()) {
      this.close.emit();
      this.loginSuccess.emit();
      this.router.navigate(["/home"]);
    } else {
      this.failedToLogin = true;
    }
  }
}
