import { Component } from '@angular/core';
import { HorarioService } from 'src/app/service/horario.service';
import { Horario } from 'src/domain/Horario';
import { Router } from '@angular/router';
import { AsignaturaService } from 'src/app/service/asignatura.service';
import { Asignatura } from 'src/domain/Asignatura';

@Component({
  selector: 'app-registro-horarios',
  templateUrl: './registro-horarios.component.html',
  styleUrls: ['./registro-horarios.component.scss']
})
export class RegistroHorariosComponent {

  lstHorarios = new Array()

  lstAsignaturas = new Array()

  dataSource: Horario[] = []; 

  displayedColumns: string[] = ['Hora ', 'Hora Entrada', 'Hora Salida', 'Aula', 'Grupo Asignatura','Acciones'];

  horario: Horario = new Horario()

  asignatura: Asignatura = new Asignatura()

  horarios:any

  constructor(private router: Router, private horarioService: HorarioService, private asignaturaService: AsignaturaService) {}

  ngOnInit(): void {
    this.loadHorarios()
    this.loadAsignaturas()
  }

  loadHorarios(){
    this.horarios = this.horarioService.getAllEstudiantes()
    console.log(this.horario)
    this.horarios.subscribe((data: any) => {
      console.log("data", data)
      this.dataSource = data
    })
  }

  loadAsignaturas() {
    this.asignaturaService.getAllAsignaturas().subscribe((data: any) => {
      this.lstAsignaturas = data;
    });
  }

  guardar(){
    console.log(this.horario)
    this.horario.grupoAsignaturas = this.asignatura.asigId
    this.horarioService.save(this.horario).subscribe(data =>{
      console.log(data)
      this.loadHorarios()
      this.limpiar()
    })
  }

  limpiar(){
    this.horario.horDia="";
    this.horario.horHoraEntrada="";
    this.horario.horHoraSalida="";
    this.horario.aulas=undefined;
    this.horario.grupoAsignaturas=undefined;
  }

}
