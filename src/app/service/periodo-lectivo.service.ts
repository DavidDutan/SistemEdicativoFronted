import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeriodoLectivo } from 'src/domain/PeriodoLectivo';

@Injectable({
  providedIn: 'root'
})
export class PeriodoLectivoService {

  constructor(private http: HttpClient) { }

  save (periodo: PeriodoLectivo): Observable<any[]> {
      return this.http.post<any>('http://localhost:8080/usuario/registrar', periodo)
  }

  getAllEstudiantes(): Observable<any[]>{
    return this.http.get<any>('http://localhost:8080/usuario/listar')
  }
}
