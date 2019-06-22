import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';
import {OptStatus} from '../models/optstatus';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginAPI = 'http://localhost:3000/login';

  constructor(
    private httpClient: HttpClient
  ) { }

  isUserLogin() {
    return false;
  }

  login(user: User): Observable<OptStatus> {
    return this.httpClient.post<OptStatus>(this.loginAPI, user);
  }
}
