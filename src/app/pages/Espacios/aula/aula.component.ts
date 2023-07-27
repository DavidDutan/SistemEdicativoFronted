import { Component } from '@angular/core';
import { Aula } from 'src/domain/Aula';
import { Router } from '@angular/router';
import { AulaService } from 'src/app/service/aula.service';
import { EdificioService } from 'src/app/service/edificio.service';
import { Edificio } from 'src/domain/Edificio';
@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.scss']
})
export class AulaComponent {
  
  lstAulas = new Array()

  lstEdificios = new Array()

  dataSource: Aula[] = []; 

  displayedColumns: string[] = ['Descripcion','Edificio','Acciones'];

  aula: Aula = new Aula()

  edificio: Edificio = new Edificio()

  aulas:any

  constructor(private router: Router, private aulaService: AulaService, private edificioService: EdificioService ) {}

  ngOnInit(): void {
    this.loadAulas()
    this.loadEdificios()
  }

  loadAulas(){
    this.aulas = this.aulaService.getAllAulas()
    console.log(this.aula)
    this.aulas.subscribe((data: any) => {
      console.log("data", data)
      this.dataSource = data
    })
  }

  loadEdificios() {
    this.edificioService.getAllEdificio().subscribe((data: any) => {
      this.lstEdificios = data;
    });
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
    this.aula.edificio=undefined;
  }
}
