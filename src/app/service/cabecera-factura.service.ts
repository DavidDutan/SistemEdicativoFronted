import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CabeceraFactura } from 'src/domain/CabeceraFactura';

@Injectable({
  providedIn: 'root'
})
export class CabeceraFacturaService {

  constructor(private http: HttpClient) { }

  save (cabfactura: CabeceraFactura): Observable<any[]> {
      return this.http.post<any>('http://localhost:8080/usuario/registrar', cabfactura)
  }

  getAllEstudiantes(): Observable<any[]>{
    return this.http.get<any>('http://localhost:8080/usuario/listar')
  }
}
