import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Edificio } from 'src/domain/Edificio';

@Injectable({
  providedIn: 'root'
})
export class EdificioService {

  constructor(private http: HttpClient) { }

  save (edificio: Edificio): Observable<any[]> {
      return this.http.post<any>('http://localhost:8080/edificio/registrar', edificio)
  }

  getAllEstudiantes(): Observable<any[]>{
    return this.http.get<any>('http://localhost:8080/edificio/listar')
  }
}
