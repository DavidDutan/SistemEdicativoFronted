import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CalificacionService } from 'src/app/service/calificacion.service';
import { Calificacion } from 'src/domain/Calificacion';


@Component({
  selector: 'app-consulta-calificaciones',
  templateUrl: './consulta-calificaciones.component.html',
  styleUrls: ['./consulta-calificaciones.component.scss']
})
export class ConsultaCalificacionesComponent {

  dataSource: Calificacion[] = []; 

  displayedColumns: string[] = ['Id', 'nota', 'Comentario', 'Fecha Calificacion'];

  calificacion: Calificacion = new Calificacion();

  calificaciones: any;

  constructor(private router: Router, private calificacioService : CalificacionService ) {}

  ngOnInit(): void {
    this.loadCalificacion()
  }

  loadCalificacion(){
    this.calificaciones = this.calificacioService.getAllCalificaciones()
    console.log(this.calificacion)
    this.calificaciones.subscribe((data: any) => {
      console.log("data", data)
      this.dataSource = data
    })
  }

  
  limpiar(){
   
  }

}
