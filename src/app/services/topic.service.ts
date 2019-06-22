import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Topic} from '../models/topic';
import {Observable} from 'rxjs';
import {OptStatus} from '../models/optstatus';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  topicAPI = 'http://localhost:3000/topics/';

  constructor(
    private httpClient: HttpClient
  ) { }

  save(topic: Topic): Observable<OptStatus> {
    return this.httpClient.post<OptStatus>(this.topicAPI, topic);
  }

  get(id: number): Observable<OptStatus> {
    return this.httpClient.get<OptStatus>(this.topicAPI + id);
  }

  getAll(): Observable<OptStatus> {
    return this.httpClient.get<OptStatus>(this.topicAPI);
  }

  update(topic: Topic): Observable<OptStatus> {
    return this.httpClient.put<OptStatus>(this.topicAPI, topic);
  }

  delete(id: number): Observable<OptStatus> {
    return this.httpClient.delete<OptStatus>(this.topicAPI + id);
  }
}
