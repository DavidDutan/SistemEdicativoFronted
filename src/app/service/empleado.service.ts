import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from 'src/domain/Empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) { }

  save (empleado: Empleado): Observable<any[]> {
      return this.http.post<any>('http://localhost:8080/empleados/registrar', empleado)
  }

  getAllEmpleados(): Observable<any[]>{
    return this.http.get<any>('http://localhost:8080/empleados/listar')
  }
}
