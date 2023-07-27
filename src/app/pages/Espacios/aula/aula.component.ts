import { Component } from '@angular/core';
import { Aula } from 'src/domain/Aula';
import { Router } from '@angular/router';
import { AulaService } from 'src/app/service/aula.service';
@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.scss']
})
export class AulaComponent {
  
  lstAulas = new Array()

  dataSource: Aula[] = []; 

  displayedColumns: string[] = ['Descripcion','Acciones'];

  aula: Aula = new Aula()

  aulas:any

  constructor(private router: Router, private aulaService: AulaService ) {}

  ngOnInit(): void {
    this.loadAulas()
  }

  loadAulas(){
    this.aulas = this.aulaService.getAllAulas()
    console.log(this.aula)
    this.aulas.subscribe((data: any) => {
      console.log("data", data)
      this.dataSource = data
    })
  }

  guardar(){
    console.log(this.aula)
    this.aulaService.save(this.aula).subscribe(data =>{
      console.log(data)
      this.loadAulas()
      this.limpiar()
    })
  }

  limpiar(){
    this.aula.auldescripcion="";
  }
}
