import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EstudianteService } from 'src/app/service/estudiante.service';
import { MatriculaService } from 'src/app/service/matricula.service';
import { Estudiante } from 'src/domain/Estudiante';
import { Matricula } from 'src/domain/Matricula';

@Component({
  selector: 'app-gestion-matriculas',
  templateUrl: './gestion-matriculas.component.html',
  styleUrls: ['./gestion-matriculas.component.scss']
})
export class GestionMatriculasComponent {

  lstMatriculas = new Array()
  lstEstudiantes = new Array()

  dataSource: Matricula[] = []; 

  displayedColumns: string[] = ['Nombre', 'Apellido', 'Correo', 'Cedula', 'Perfil Acceso', 'Grado Academico', 'Id Estudiante', 'Tipo', 'Fecha','Acciones'];

  matricula: Matricula = new Matricula()
  estudiante: Estudiante = new Estudiante()

  matriculas:any

  constructor(private router: Router, private matriculaService: MatriculaService, private estudianteService: EstudianteService ) {}

  ngOnInit(): void {
    this.loadEstudiantes()
    this.loadMatriculas()
  }

  loadMatriculas(){
    this.matriculas = this.matriculaService.getAllMatriculas()
    console.log(this.matricula)
    this.matriculas.subscribe((data: any) => {
      console.log("data", data)
      this.dataSource = data
    })
  }

  guardar(){
    console.log(this.matricula)
    this.matricula.matEliminado = false
    this.matriculaService.save(this.matricula).subscribe(data =>{
      console.log(data)
      this.loadMatriculas()
      this.limpiar()
    })
  }

  loadEstudiantes() {
    this.estudianteService.getAllEstudiantes().subscribe((data: any) => {
      this.lstEstudiantes = data;
    });
  }


  limpiar(){
    this.matricula.matTipo="";
    this.matricula.matFecha="";
    this.matricula.estudiante=undefined;
  }
}
