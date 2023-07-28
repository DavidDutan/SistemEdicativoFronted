import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudiante } from 'src/domain/Estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private http: HttpClient) { }

  save (estudiante: Estudiante): Observable<any[]> {
      return this.http.post<any>('http://localhost:8080/estudiantes/registrar', estudiante)
  }

  getAllEstudiantes(): Observable<any[]>{
    return this.http.get<any>('http://localhost:8080/estudiantes/listar')
  }


  actualizar(estudiante: Estudiante): Observable<any[]> {
    return this.http.patch<any>('http://localhost:8080/estudiantes/actualizar', estudiante)
  }
}
