import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserContext } from '../../../UserContext';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /**
   *
   */
  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:';

  getById(id: number):Observable<UserContext> {
    return this.http.get<UserContext>(`${this.baseUrl}/user/search-id/${id}`);
  }
  getByEmail(email:string):Observable<UserContext>{
    return this.http.get<UserContext>(`${this.baseUrl}/user/search-email/${email}`);
  }
  getByUsername(username:string):Observable<UserContext>{
    return this.http.get<UserContext>(`${this.baseUrl}/user/search-username/${username}`);
  }
  getByLoginIdentifier(loginId:string):Observable<UserContext>{
    return this.http.get<UserContext>(`${this.baseUrl}/user/search-identifier/${loginId}`);
  }
  register(user: UserContext):Observable<any>{
    return this.http.post(`${this.baseUrl}/user/register`, user);
  }
  authenticate(user: UserContext):Observable<any>{
    return this.http.post(`${this.baseUrl}/user/authenticate`, user);
  }
}
