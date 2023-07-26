import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Docente } from 'src/domain/Docente';

@Injectable({
    providedIn: 'root'
  })
export class DocenteService {
    constructor(private http: HttpClient) { }

    save (docente: Docente): Observable<any[]> {
        return this.http.post<any>('http://localhost:8080/profesores/registrar', docente)
    }
  
    getAllDocentes(): Observable<any[]>{
      return this.http.get<any>('http://localhost:8080/profesores/listar')
    }
}