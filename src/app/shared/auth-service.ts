import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserContext } from '../UserContext';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  private _user: BehaviorSubject<UserContext> = new BehaviorSubject<UserContext>(new UserContext('', '', '', false));

  constructor() {    
  }
  setUser(user:UserContext){
    this._user.next(user);
  }
  isAuthenticated(): boolean{
    return this._user.getValue()?.isLoggedIn;
  }
  authenticateUser(user: UserContext){
    if(user.username === "caioAzevedo" && user.password === "123456"){
      user.isLoggedIn = true;
      this.setUser(user);
    }else{
      user.isLoggedIn = false;
    }
  }
  logoff(){
    this.setUser(new UserContext('', '', '', false));
  }
}
