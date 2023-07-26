import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AsignaturaService } from 'src/app/service/asignatura.service';
import { Asignatura } from 'src/domain/Asignatura';


@Component({
  selector: 'app-gestion-asignaturas',
  templateUrl: './gestion-asignaturas.component.html',
  styleUrls: ['./gestion-asignaturas.component.scss']
})
export class GestionAsignaturasComponent {

  lstEstudiantes = new Array()

  dataSource: Asignatura[] = []; 

  displayedColumns: string[] = ['Id', 'nombre', 'Creditos'];

  asignatura: Asignatura = new Asignatura();

  asignaturas:any;

  constructor(private router: Router, private asignaturaService: AsignaturaService ) {}

  ngOnInit(): void {
    this.loadAsignatura()
  }

  loadAsignatura(){
    this.asignaturas = this.asignaturaService.getAllAsignaturas()
    console.log(this.asignatura)
    this.asignaturas.subscribe((data: any) => {
      console.log("data", data)
      this.dataSource = data
    })
  }

  guardar(){
    console.log(this.asignatura)
    this.asignaturaService.save(this.asignatura).subscribe(data =>{
      console.log(data)
      this.loadAsignatura()
      this.limpiar()
    })
  }

  limpiar(){


    this.asignatura.asigNombre="";

  }



}
