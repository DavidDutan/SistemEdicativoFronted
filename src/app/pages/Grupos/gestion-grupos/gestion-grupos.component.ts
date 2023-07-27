import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GrupoAsignaturaService } from 'src/app/service/grupo-asignatura.service';
import { GrupoAsignatura } from 'src/domain/GrupoAsignatura';


@Component({
  selector: 'app-gestion-grupos',
  templateUrl: './gestion-grupos.component.html',
  styleUrls: ['./gestion-grupos.component.scss']
})
export class GestionGruposComponent {

  dataSource: GrupoAsignatura[] = []; 

  displayedColumns: string[] = ['Id', 'Grupo Academico'];

  grupoAsignatura: GrupoAsignatura = new GrupoAsignatura();

  gruposAsignaturas: any;

  constructor(private router: Router, private grupoAsignaturaService : GrupoAsignaturaService ) {}

  ngOnInit(): void {
    this.loadGrupoAsignatura()
  }

  loadGrupoAsignatura(){
    this.gruposAsignaturas = this.grupoAsignaturaService.getAllGrupoAsignatura()
    console.log(this.grupoAsignatura)
    this.gruposAsignaturas.subscribe((data: any) => {
      console.log("data", data)
      this.dataSource = data
    })
  }

  guardar(){
    console.log(this.grupoAsignatura)
    this.grupoAsignaturaService.save(this.grupoAsignatura).subscribe(data =>{
      console.log(data)
      this.loadGrupoAsignatura()
  
    })
  }


}
