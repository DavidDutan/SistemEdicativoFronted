import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Usuario } from 'src/domain/Usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private _perfilAcceso = new BehaviorSubject<string>('');
  readonly perfilAcceso$ = this._perfilAcceso.asObservable();

  constructor(private http: HttpClient) {}

  Autentificacion(usuario: Usuario): Observable<string> {
    let params = new HttpParams();
    if (usuario.usuCorreo) {
      params = params.set('usuCorreo', usuario.usuCorreo);
    }
    if (usuario.usuPassword) {
      params = params.set('usuPassword', usuario.usuPassword);
    }
    return this.http.get<string>('http://localhost:8080/usuarios/login', {
      params,
    }).pipe(
      tap(res => {
        console.log(res)
        this._perfilAcceso.next(res);
      })
    );
  }
}
