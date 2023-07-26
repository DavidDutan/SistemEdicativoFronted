import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asignatura } from 'src/domain/Asignatura';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  constructor(private http: HttpClient) { }

  save (asignatura: Asignatura): Observable<any[]> {
      return this.http.post<any>('http://localhost:8080/asignaturas/registrar', asignatura)
  }

  getAllAsignaturas(): Observable<any[]>{
    return this.http.get<any>('http://localhost:8080/asignaturas/listar')
  }
}
