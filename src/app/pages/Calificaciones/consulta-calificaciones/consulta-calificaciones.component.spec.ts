import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaCalificacionesComponent } from './consulta-calificaciones.component';

describe('ConsultaCalificacionesComponent', () => {
  let component: ConsultaCalificacionesComponent;
  let fixture: ComponentFixture<ConsultaCalificacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaCalificacionesComponent]
    });
    fixture = TestBed.createComponent(ConsultaCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
