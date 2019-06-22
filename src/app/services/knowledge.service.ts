import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Topic} from '../models/topic';
import {Observable} from 'rxjs';
import {OptStatus} from '../models/optstatus';
import {Knowledge} from '../models/knowledge';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeService {

  knowledgeAPI = 'http://localhost:3000/knowledges/';

  constructor(
    private httpClient: HttpClient
  ) { }

  save(knowledge: Knowledge): Observable<OptStatus> {
    return this.httpClient.post<OptStatus>(this.knowledgeAPI, knowledge);
  }

  get(id: number): Observable<OptStatus> {
    return this.httpClient.get<OptStatus>(this.knowledgeAPI + id);
  }

  getAll(): Observable<OptStatus> {
    return this.httpClient.get<OptStatus>(this.knowledgeAPI);
  }

  update(knowledge: Knowledge): Observable<OptStatus> {
    return this.httpClient.put<OptStatus>(this.knowledgeAPI, knowledge);
  }

  delete(id: number): Observable<OptStatus> {
    return this.httpClient.delete<OptStatus>(this.knowledgeAPI + id);
  }
}
