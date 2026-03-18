import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../signal-service';


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

  user: string = "";
  password: string = "";

  isLoggedIn = false;
  failedToLogin = false;

  focusNext(next: HTMLElement | HTMLTextAreaElement){
    console.log(next);
    next.focus();
  }

  login() {
    console.log("Login attempt with user:", this.user, "and password:", this.password);

    if(this.user == "caioAzevedo" && this.password == "123456"){
      this.close.emit();
      this.loginSuccess.emit();
      this.auth.successfulLogin();
      this.router.navigate(["/home"]);
    }else{
      this.failedToLogin = true;
    }

  }
}
