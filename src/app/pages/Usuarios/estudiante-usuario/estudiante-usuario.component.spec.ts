import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteUsuarioComponent } from './estudiante-usuario.component';

describe('EstudianteUsuarioComponent', () => {
  let component: EstudianteUsuarioComponent;
  let fixture: ComponentFixture<EstudianteUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstudianteUsuarioComponent]
    });
    fixture = TestBed.createComponent(EstudianteUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
