import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Titulo } from 'src/domain/Titulo';

@Injectable({
  providedIn: 'root'
})
export class TituloService {

  constructor(private http: HttpClient) { }

  save (titulo: Titulo): Observable<any[]> {
      return this.http.post<any>('http://localhost:8080/usuario/registrar', titulo)
  }

  getAllEstudiantes(): Observable<any[]>{
    return this.http.get<any>('http://localhost:8080/usuario/listar')
  }
}
