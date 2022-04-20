import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CrudService } from '../shared/crud-service';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class Cursos2Service extends CrudService<Curso> {

  constructor(protected override http: HttpClient) {
    super(http, `${environment.API}cursos`);
  }

  // override loadByID(id: any): Observable<Curso> {
  //   return null;
  // }
}
