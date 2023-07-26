import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoUsuarioComponent } from './empleado-usuario.component';

describe('EmpleadoUsuarioComponent', () => {
  let component: EmpleadoUsuarioComponent;
  let fixture: ComponentFixture<EmpleadoUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadoUsuarioComponent]
    });
    fixture = TestBed.createComponent(EmpleadoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
