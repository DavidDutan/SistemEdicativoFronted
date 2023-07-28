import { Component } from '@angular/core';
import { HorarioService } from 'src/app/service/horario.service';
import { Horario } from 'src/domain/Horario';
import { Router } from '@angular/router';
import { AsignaturaService } from 'src/app/service/asignatura.service';
import { Asignatura } from 'src/domain/Asignatura';
import { Aula } from 'src/domain/Aula';
import { AulaService } from 'src/app/service/aula.service';

@Component({
  selector: 'app-registro-horarios',
  templateUrl: './registro-horarios.component.html',
  styleUrls: ['./registro-horarios.component.scss']
})
export class RegistroHorariosComponent {

  lstHorarios = new Array()
  lstAulas = new Array()
  lstAsignaturas = new Array()

  dataSource: Horario[] = []; 

  displayedColumns: string[] = ['Hora ', 'Hora Entrada', 'Hora Salida', 'Aula', 'Grupo Asignatura','Acciones'];

  horario: Horario = new Horario()

  asignatura: Asignatura = new Asignatura()
  aula: Aula= new Aula()

  horarios:any

  constructor(private router: Router, private horarioService: HorarioService, private asignaturaService: AsignaturaService, private aulaService: AulaService) {}

  ngOnInit(): void {
    this.loadHorarios()
    this.loadAsignaturas()
    this.loadAulas()
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

  loadAulas() {
    this.aulaService.getAllAulas().subscribe((data: any) => {
      this.lstAulas = data;
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
    this.horario.aula=undefined;
    this.horario.grupoAsignaturas=undefined;
  }

}
