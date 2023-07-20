import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaConfgComponent } from './sistema-confg.component';

describe('SistemaConfgComponent', () => {
  let component: SistemaConfgComponent;
  let fixture: ComponentFixture<SistemaConfgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SistemaConfgComponent]
    });
    fixture = TestBed.createComponent(SistemaConfgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
