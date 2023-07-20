import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneracionReportesComponent } from './generacion-reportes.component';

describe('GeneracionReportesComponent', () => {
  let component: GeneracionReportesComponent;
  let fixture: ComponentFixture<GeneracionReportesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneracionReportesComponent]
    });
    fixture = TestBed.createComponent(GeneracionReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
