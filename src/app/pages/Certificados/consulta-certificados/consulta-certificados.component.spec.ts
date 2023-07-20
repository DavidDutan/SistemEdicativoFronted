import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaCertificadosComponent } from './consulta-certificados.component';

describe('ConsultaCertificadosComponent', () => {
  let component: ConsultaCertificadosComponent;
  let fixture: ComponentFixture<ConsultaCertificadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaCertificadosComponent]
    });
    fixture = TestBed.createComponent(ConsultaCertificadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
