import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';
import {OptStatus} from '../models/optstatus';
import {Observable} from 'rxjs';
import {SessionStorage} from '../core/common/session.storage';
import {Token} from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginAPI = 'http://localhost:3000/login';

  constructor(
    private httpClient: HttpClient,
    private sessionStorage: SessionStorage
  ) { }

  isUserLogin() {
    const token = this.sessionStorage.get('token');
    if (!!token) {
      return true;
    } else {
      return false;
    }
  }

  login(user: User): Observable<OptStatus> {
    return this.httpClient.post<OptStatus>(this.loginAPI, user);
  }

  updateToken(token: Token): void {
    this.sessionStorage.set('token', token.token);
  }

  clearToken(): void {
    this.sessionStorage.remove('token');
  }
}
