import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from 'src/domain/Usuario';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent {
  lstUsuarios = new Array()

  dataSource: Usuario[] = []; 

  displayedColumns: string[] = ['ID', 'Nombre', 'Apellido', 'Correo', 'Perfil de Acceso', 'Cédula', 'Acciones'];

  usuario: Usuario = new Usuario()

  usuarios:any

  constructor(private router: Router, private usuarioService: UsuarioService ) {}

  ngOnInit(): void {
    this.loadUsuarios()
  }

  loadUsuarios(){
    this.usuarios = this.usuarioService.getAllUsuarios()
    console.log(this.usuarios)
    this.usuarios.subscribe((data: any) => {
      console.log("data", data)
      this.dataSource = data
    })
  }

  guardar(){
    console.log(this.usuarios)
    this.usuarioService.save(this.usuarios).subscribe(data =>{
      console.log(data)
      this.loadUsuarios()
      this.limpiar()
    })
  }

  limpiar(){
    this.usuario.usuNombre="";
    this.usuario.usuApellido="";
    this.usuario.usuCedula="";
    this.usuario.usuCorreo="";
    this.usuario.usuPerfilAcceso="";
    this.usuario.usuPassword="";
  }
}
