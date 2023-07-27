import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aula } from 'src/domain/Aula';

@Injectable({
  providedIn: 'root'
})
export class AulaService {

  constructor(private http: HttpClient) { }

  save (aula: Aula): Observable<any[]> {
      return this.http.post<any>('http://localhost:8080/aulas/registrar', aula)
  }

  getAllEstudiantes(): Observable<any[]>{
    return this.http.get<any>('http://localhost:8080/aulas/listar')
  }
}
