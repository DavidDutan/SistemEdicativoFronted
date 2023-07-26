import { Component } from '@angular/core';
import { HorarioService } from 'src/app/service/horario.service';
import { Horario } from 'src/domain/Horario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-horarios',
  templateUrl: './registro-horarios.component.html',
  styleUrls: ['./registro-horarios.component.scss']
})
export class RegistroHorariosComponent {
  lstHorarios = new Array()

  dataSource: Horario[] = []; 

  displayedColumns: string[] = ['Hora ', 'Hora Entrada', 'Hora Salida', 'Aula', 'Grupo Asignatura','Acciones'];

  horario: Horario = new Horario()

  horarios:any

  constructor(private router: Router, private horarioService: HorarioService) {}

  ngOnInit(): void {
    this.loadHorarios()
  }

  loadHorarios(){
    this.horarios = this.horarioService.getAllEstudiantes()
    console.log(this.horario)
    this.horarios.subscribe((data: any) => {
      console.log("data", data)
      this.dataSource = data
    })
  }

  guardar(){
    console.log(this.horario)
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
