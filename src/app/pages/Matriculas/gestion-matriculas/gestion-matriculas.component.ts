import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatriculaService } from 'src/app/service/matricula.service';
import { Matricula } from 'src/domain/Matricula';

@Component({
  selector: 'app-gestion-matriculas',
  templateUrl: './gestion-matriculas.component.html',
  styleUrls: ['./gestion-matriculas.component.scss']
})
export class GestionMatriculasComponent {

  lstMatriculas = new Array()

  dataSource: Matricula[] = []; 

  displayedColumns: string[] = ['Nombre', 'Apellido', 'Correo', 'Cedula', 'Perfil Acceso', 'Grado Academico', 'Id Estudiante', 'Acciones'];

  matricula: Matricula = new Matricula()

  matriculas:any

  constructor(private router: Router, private matriculaService: MatriculaService ) {}

  ngOnInit(): void {
    this.loadEstudiantes()
  }

  loadEstudiantes(){
    this.matriculas = this.matriculaService.getAllEstudiantes()
    console.log(this.matricula)
    this.matriculas.subscribe((data: any) => {
      console.log("data", data)
      this.dataSource = data
    })
  }

  guardar(){
    console.log(this.matricula)
    this.matriculaService.save(this.matricula).subscribe(data =>{
      console.log(data)
      this.loadEstudiantes()
      this.limpiar()
    })
  }

  limpiar(){
    this.matricula.mat_tipo="";
    this.matricula.mat_fecha="";
    this.matricula.estudiante=0n;
  }
}
