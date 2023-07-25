import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Calificacion } from 'src/domain/Calificacion';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

  constructor(private http: HttpClient) { }

  save (calificacion: Calificacion): Observable<any[]> {
      return this.http.post<any>('http://localhost:8080/usuario/registrar', calificacion)
  }

  getAllEstudiantes(): Observable<any[]>{
    return this.http.get<any>('http://localhost:8080/usuario/listar')
  }
}
