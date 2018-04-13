import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

import { Department } from './department';

@Injectable()
export class DepartmentService {

  private entity_url = environment.REST_API_URL + 'department';

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.entity_url + '/all');
  }
}
