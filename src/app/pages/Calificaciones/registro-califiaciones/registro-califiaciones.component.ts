import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CalificacionService } from 'src/app/service/calificacion.service';
import { Calificacion } from 'src/domain/Calificacion';

@Component({
  selector: 'app-registro-califiaciones',
  templateUrl: './registro-califiaciones.component.html',
  styleUrls: ['./registro-califiaciones.component.scss']
})

export class RegistroCalifiacionesComponent {

  caliId?: BigInt;
    nota?: number;
    comentario?: string;
    fechaCalificacion?: string;


  lstCalificacion = new Array()

  dataSource: Calificacion[] = []; 

  displayedColumns: string[] = ['Id', 'nota', 'Comentario','Fecha Calificacion'];

  calificacion: Calificacion = new Calificacion();

  calificaciones:any;

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

  guardar(){
    console.log(this.calificacion)
    this.calificacioService.save(this.calificacion).subscribe(data =>{
      console.log(data)
      this.loadCalificacion()
      this.limpiar()
    })
  }

  limpiar(){


    
  }
}
