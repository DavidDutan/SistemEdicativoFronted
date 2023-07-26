import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/domain/Usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  Autentificacion(usuario: Usuario): Observable<any[]> {
    let params = new HttpParams();
    if (usuario.usuCorreo) {
      params = params.set('usuCorreo', usuario.usuCorreo);
    }
    if (usuario.usuPassword) {
      params = params.set('usuPassword', usuario.usuPassword);
    }
    return this.http.get<any>('http://localhost:8080/usuarios/login', {
      params,
    });
  }
}
