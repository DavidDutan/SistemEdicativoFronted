import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EstudianteService } from 'src/app/service/estudiante.service';
import { Estudiante } from 'src/domain/Estudiante';

@Component({
  selector: 'app-gestion-estudiantes',
  templateUrl: './gestion-estudiantes.component.html',
  styleUrls: ['./gestion-estudiantes.component.scss']
})
export class GestionEstudiantesComponent {

  lstEstudiantes = new Array()

  dataSource: Estudiante[] = []; 

  displayedColumns: string[] = ['Nombre', 'Apellido', 'Correo', 'Cedula', 'Perfil Acceso', 'Grado Academico', 'Id Estudiante', 'Acciones'];

  estudiante: Estudiante = new Estudiante()

  estudiantes:any

  constructor(private router: Router, private estudianteService: EstudianteService ) {}

  ngOnInit(): void {
    this.loadEstudiantes()
  }

  loadEstudiantes(){
    this.estudiantes = this.estudianteService.getAllEstudiantes()
    console.log(this.estudiante)
    this.estudiantes.subscribe((data: any) => {
      console.log("data", data)
      this.dataSource = data
    })
  }

  guardar(){
    console.log(this.estudiante)
    this.estudianteService.save(this.estudiante).subscribe(data =>{
      console.log(data)
      this.loadEstudiantes()
      this.limpiar()
    })
  }

  limpiar(){
    this.estudiante.usuNombre="";
    this.estudiante.usuApellido="";
    this.estudiante.usuCedula="";
    this.estudiante.usuCorreo="";
    this.estudiante.usuPerfilAcceso="";  
    this.estudiante.usuPassword=""; 
    this.estudiante.estGradoAcademico=""; 
  }
}
