import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrera } from 'src/domain/Carrera';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  constructor(private http: HttpClient) { }

  save (carrera: Carrera): Observable<any[]> {
      return this.http.post<any>('http://localhost:8080/carreras/registrar', carrera)
  }

  getAllEstudiantes(): Observable<any[]>{
    return this.http.get<any>('http://localhost:8080/carreras/listar')
  }
}
