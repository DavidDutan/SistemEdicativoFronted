import { TestBed } from '@angular/core/testing';

import { DetalleMatriculaService } from './detalle-matricula.service';

describe('DetalleMatriculaService', () => {
  let service: DetalleMatriculaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleMatriculaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
