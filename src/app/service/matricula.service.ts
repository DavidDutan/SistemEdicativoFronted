import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Matricula } from 'src/domain/Matricula';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  constructor(private http: HttpClient) { }

  save (matricula: Matricula): Observable<any[]> {
      return this.http.post<any>('http://localhost:8080/matricula/registrar', matricula)
  }

  getAllMatriculas(): Observable<any[]>{
    return this.http.get<any>('http://localhost:8080/matricula/listar')
  }
}
