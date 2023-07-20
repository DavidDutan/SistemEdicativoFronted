import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDocentesComponent } from './gestion-docentes.component';

describe('GestionDocentesComponent', () => {
  let component: GestionDocentesComponent;
  let fixture: ComponentFixture<GestionDocentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionDocentesComponent]
    });
    fixture = TestBed.createComponent(GestionDocentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
