import { Injectable } from '@angular/core';
import { UserContext } from '../UserContext';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user: BehaviorSubject<UserContext> = new BehaviorSubject<UserContext>(new UserContext('', '', '', false));

  setUser(user: UserContext): void {
    this._user.next(user);
  }

  getUser() {
    return this._user.asObservable();
  }
}
