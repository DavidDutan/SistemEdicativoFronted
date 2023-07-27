import { Component } from '@angular/core';
import { Edificio } from 'src/domain/Edificio';
import { Router } from '@angular/router';
import { EdificioService } from 'src/app/service/edificio.service';

@Component({
  selector: 'app-edificio',
  templateUrl: './edificio.component.html',
  styleUrls: ['./edificio.component.scss']
})
export class EdificioComponent {

  lstEdificios = new Array()

  dataSource: Edificio[] = []; 

  displayedColumns: string[] = ['Nombre', 'Aulas','Acciones'];

  edificio: Edificio = new Edificio()

  edificios:any

  constructor(private router: Router, private edificioService: EdificioService ) {}

  ngOnInit(): void {
    this.loadEdificios()
  }

  loadEdificios(){
    this.edificios = this.edificioService.getAllEdificio()
    console.log(this.edificio)
    this.edificios.subscribe((data: any) => {
      console.log("data", data)
      this.dataSource = data
    })
  }

  guardar(){
    console.log(this.edificio)
    this.edificioService.save(this.edificio).subscribe(data =>{
      console.log(data)
      this.loadEdificios()
      this.limpiar()
    })
  }

  limpiar(){
    this.edificio.ediNombre="";
    this.edificio.ediNumeroAulas=undefined;
  }
}
