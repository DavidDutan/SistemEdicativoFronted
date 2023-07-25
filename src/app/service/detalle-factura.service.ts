import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetalleFactura } from 'src/domain/DetalleFactura';

@Injectable({
  providedIn: 'root'
})
export class DetalleFacturaService {

  constructor(private http: HttpClient) { }

  save (detFactura: DetalleFactura): Observable<any[]> {
      return this.http.post<any>('http://localhost:8080/usuario/registrar', detFactura)
  }

  getAllEstudiantes(): Observable<any[]>{
    return this.http.get<any>('http://localhost:8080/usuario/listar')
  }
}
