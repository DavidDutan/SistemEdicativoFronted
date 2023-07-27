import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from 'src/domain/Usuario';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss'],
})
export class InicioSesionComponent implements OnInit {

  usuario: Usuario = new Usuario();
  error: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  @ViewChild('wrapper') wrapperElement!: ElementRef<HTMLDivElement>;
  @ViewChild('loginLink') loginLinkElement!: ElementRef<HTMLAnchorElement>;
  @ViewChild('registerLink') registerLinkElement!: ElementRef<HTMLAnchorElement>;

  ngOnInit(): void {
    this.registerLinkElement.nativeElement.addEventListener('click', () => {
      this.wrapperElement.nativeElement.classList.add('active');
    });

    this.loginLinkElement.nativeElement.addEventListener('click', () => {
      this.wrapperElement.nativeElement.classList.remove('active');
    });
  }

  login(): void {
    this.usuarioService.Autentificacion(this.usuario).subscribe(
      (response) => {
        if (response) {
          switch (response.usuPerfilAcceso) {
            case 'Ad':
              this.router.navigate(['/administrador']);
              break;
            case 'Es':
              this.router.navigate(['/estudiante']);
              break;
            case 'Do':
              this.router.navigate(['/docente']);
              break;
          }
        } else {
          this.error = "Usuario o contraseña incorrectos.";
        }
      },
      (error) => {
        this.error = error.message;
      }
    );
  }
}
