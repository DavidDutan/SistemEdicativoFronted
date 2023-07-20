import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroIEComponent } from './registro-ie.component';

describe('RegistroIEComponent', () => {
  let component: RegistroIEComponent;
  let fixture: ComponentFixture<RegistroIEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroIEComponent]
    });
    fixture = TestBed.createComponent(RegistroIEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
