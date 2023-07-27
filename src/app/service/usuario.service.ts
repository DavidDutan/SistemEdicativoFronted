import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Usuario } from 'src/domain/Usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private _usuario = new BehaviorSubject<Usuario | null>(null);
  readonly usuario$ = this._usuario.asObservable();

  constructor(private http: HttpClient) {}

  Autentificacion(usuario: Usuario): Observable<Usuario> {
    let params = new HttpParams();
    if (usuario.usuCorreo) {
      params = params.set('usuCorreo', usuario.usuCorreo);
    }
    if (usuario.usuPassword) {
      params = params.set('usuPassword', usuario.usuPassword);
    }
    return this.http
      .get<Usuario>('http://localhost:8080/usuarios/login', {
        params,
      })
      .pipe(tap((response) => this._usuario.next(response)));
  }

  save(usuario: Usuario): Observable<any[]> {
    return this.http.post<any>(
      'http://localhost:8080/usuarios/registrar',
      usuario
    );
  }

  getAllUsuarios(): Observable<any[]> {
    return this.http.get<any>('http://localhost:8080/usuarios/listar');
  }

  limpiarUsuario(): void {
    this._usuario.next(null);
  }
}
