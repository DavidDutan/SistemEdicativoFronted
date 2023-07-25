import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarreraEstudiante } from 'src/domain/CarreraEstudiante';

@Injectable({
  providedIn: 'root'
})
export class CarreraEstudianteService {

  constructor(private http: HttpClient) { }

  save (carreraEstudiante: CarreraEstudiante): Observable<any[]> {
      return this.http.post<any>('http://localhost:8080/usuario/registrar', carreraEstudiante)
  }

  getAllEstudiantes(): Observable<any[]>{
    return this.http.get<any>('http://localhost:8080/usuario/listar')
  }
}
