import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmisionComprobantesComponent } from './emision-comprobantes.component';

describe('EmisionComprobantesComponent', () => {
  let component: EmisionComprobantesComponent;
  let fixture: ComponentFixture<EmisionComprobantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmisionComprobantesComponent]
    });
    fixture = TestBed.createComponent(EmisionComprobantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
