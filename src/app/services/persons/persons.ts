import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Person} from '../../types';

@Injectable({
  providedIn: 'root',
})
export class PersonsService {
  private http = inject(HttpClient);

  public getDataAPI() {
    return this.http.get<Person[]>(`${environment.API_URL}`);
  }
}
