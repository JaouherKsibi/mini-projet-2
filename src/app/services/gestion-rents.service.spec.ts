import { TestBed } from '@angular/core/testing';

import { GestionRentsService } from './gestion-rents.service';

describe('GestionRentsService', () => {
  let service: GestionRentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionRentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
