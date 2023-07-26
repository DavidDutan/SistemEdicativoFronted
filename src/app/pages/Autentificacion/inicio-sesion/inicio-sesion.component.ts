import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  constructor(private usuarioService: UsuarioService) {}

  @ViewChild('wrapper') wrapperElement!: ElementRef<HTMLDivElement>;
  @ViewChild('loginLink') loginLinkElement!: ElementRef<HTMLAnchorElement>;
  @ViewChild('registerLink')
  registerLinkElement!: ElementRef<HTMLAnchorElement>;

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
      (perfilAcceso) => {
        console.log(perfilAcceso);
      },
      (error) => {
        this.error = error.message;
      }
    );
  }
}
