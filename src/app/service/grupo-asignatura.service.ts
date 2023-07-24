import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GrupoAsignatura } from 'src/domain/GrupoAsignatura';

@Injectable({
  providedIn: 'root'
})
export class GrupoAsignaturaService {

  constructor(private http: HttpClient) { }

  save (grpAsignatura: GrupoAsignatura): Observable<any[]> {
      return this.http.post<any>('http://localhost:8080/usuario/registrar', grpAsignatura)
  }

  getAllEstudiantes(): Observable<any[]>{
    return this.http.get<any>('http://localhost:8080/usuario/listar')
  }
}
