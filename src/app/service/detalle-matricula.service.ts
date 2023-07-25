import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetalleMatricula } from 'src/domain/DetalleMatricula';

@Injectable({
  providedIn: 'root'
})
export class DetalleMatriculaService {

  constructor(private http: HttpClient) { }

  save (detMatricula: DetalleMatricula): Observable<any[]> {
      return this.http.post<any>('http://localhost:8080/usuario/registrar', detMatricula)
  }

  getAllEstudiantes(): Observable<any[]>{
    return this.http.get<any>('http://localhost:8080/usuario/listar')
  }
}
