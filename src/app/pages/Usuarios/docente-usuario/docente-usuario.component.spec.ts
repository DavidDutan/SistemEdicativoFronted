import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteUsuarioComponent } from './docente-usuario.component';

describe('DocenteUsuarioComponent', () => {
  let component: DocenteUsuarioComponent;
  let fixture: ComponentFixture<DocenteUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocenteUsuarioComponent]
    });
    fixture = TestBed.createComponent(DocenteUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
