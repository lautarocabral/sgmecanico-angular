import { Injectable } from '@angular/core';
import { HttpService } from '../common/http.service';
import { Observable } from 'rxjs';
import { List } from 'lodash';
import { Rectificado } from 'src/app/models/rectificado.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpService: HttpService) { }

  getAll(): Observable<Rectificado[]> {
    return this.httpService.get('Rectificados');
  }
  add(body: any): Observable<Rectificado> {
    return this.httpService.post('Rectificados', body);
  }
  delete(body: any): Observable<Rectificado> {
    return this.httpService.delete('Rectificados');
  }
}
