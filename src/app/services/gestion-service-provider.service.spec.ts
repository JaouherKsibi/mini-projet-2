import { TestBed } from '@angular/core/testing';

import { GestionServiceProviderService } from './gestion-service-provider.service';

describe('GestionServiceProviderService', () => {
  let service: GestionServiceProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionServiceProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
