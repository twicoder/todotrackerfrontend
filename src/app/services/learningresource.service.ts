import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Topic} from '../models/topic';
import {Observable} from 'rxjs';
import {OptStatus} from '../models/optstatus';

@Injectable({
  providedIn: 'root'
})
export class LearningresourceService {

  apiUrl = 'http://localhost:3000/learningresources/';

  constructor(
    private httpClient: HttpClient
  ) { }

  save(obj: LearningresourceService): Observable<OptStatus> {
    return this.httpClient.post<OptStatus>(this.apiUrl, obj);
  }

  get(id: number): Observable<OptStatus> {
    return this.httpClient.get<OptStatus>(this.apiUrl + id);
  }

  getAll(): Observable<OptStatus> {
    return this.httpClient.get<OptStatus>(this.apiUrl);
  }

  update(obj: LearningresourceService): Observable<OptStatus> {
    return this.httpClient.put<OptStatus>(this.apiUrl, obj);
  }

  delete(id: number): Observable<OptStatus> {
    return this.httpClient.delete<OptStatus>(this.apiUrl + id);
  }
}
