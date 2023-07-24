import { TestBed } from '@angular/core/testing';

import { GrupoAsignaturaService } from './grupo-asignatura.service';

describe('GrupoAsignaturaService', () => {
  let service: GrupoAsignaturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupoAsignaturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
