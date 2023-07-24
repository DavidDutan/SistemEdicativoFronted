import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RubroDeCobro } from 'src/domain/RubroDeCobro';

@Injectable({
  providedIn: 'root'
})
export class RubroService {

  constructor(private http: HttpClient) { }

  save (rubro: RubroDeCobro): Observable<any[]> {
      return this.http.post<any>('http://localhost:8080/usuario/registrar', rubro)
  }

  getAllEstudiantes(): Observable<any[]>{
    return this.http.get<any>('http://localhost:8080/usuario/listar')
  }
}
