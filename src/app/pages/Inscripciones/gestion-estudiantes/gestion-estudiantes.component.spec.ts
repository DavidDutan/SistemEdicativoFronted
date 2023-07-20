import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEstudiantesComponent } from './gestion-estudiantes.component';

describe('GestionEstudiantesComponent', () => {
  let component: GestionEstudiantesComponent;
  let fixture: ComponentFixture<GestionEstudiantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionEstudiantesComponent]
    });
    fixture = TestBed.createComponent(GestionEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
