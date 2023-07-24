import { TestBed } from '@angular/core/testing';

import { CarreraEstudianteService } from './carrera-estudiante.service';

describe('CarreraEstudianteService', () => {
  let service: CarreraEstudianteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarreraEstudianteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
