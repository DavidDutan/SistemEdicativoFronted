import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCalifiacionesComponent } from './registro-califiaciones.component';

describe('RegistroCalifiacionesComponent', () => {
  let component: RegistroCalifiacionesComponent;
  let fixture: ComponentFixture<RegistroCalifiacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroCalifiacionesComponent]
    });
    fixture = TestBed.createComponent(RegistroCalifiacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
