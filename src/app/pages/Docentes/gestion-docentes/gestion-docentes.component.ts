import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocenteService } from 'src/app/service/docente.service';
import { Docente } from 'src/domain/Docente';

@Component({
  selector: 'app-gestion-docentes',
  templateUrl: './gestion-docentes.component.html',
  styleUrls: ['./gestion-docentes.component.scss']
})
export class GestionDocentesComponent {

  lstDocentes = new Array()

  dataSource: Docente[] = []; 

  displayedColumns: string[] = ['Nombre', 'Apellido', 'Correo', 'Cedula', 'Perfil Acceso', 'Especialidad', 'Id Docente', 'Acciones'];

  docente: Docente = new Docente()

  docentes:any

  constructor(private router: Router, private docenteService: DocenteService ) {}

  ngOnInit(): void {
    this.loadDocentes()
  }

  loadDocentes(){
    this.docentes = this.docenteService.getAllDocentes()
    console.log(this.docente)
    this.docentes.subscribe((data: any) => {
      console.log("data", data)
      this.dataSource = data
    })
  }

  guardar(){
    console.log(this.docente)
    this.docenteService.save(this.docente).subscribe(data =>{
      console.log(data)
      this.loadDocentes()
      this.limpiar()
    })
  }

  editar(docente: Docente){
    this.docente = { ...docente };
  }

  
  eliminar(){

  }

  limpiar(){
    this.docente.usuNombre="";
    this.docente.usuApellido="";
    this.docente.usuCedula="";
    this.docente.usuCorreo="";
    this.docente.usuPerfilAcceso="";
    this.docente.usuPassword="";
    this.docente.proEspecialidad="";
  }
}
