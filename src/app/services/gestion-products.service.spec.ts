import { TestBed } from '@angular/core/testing';

import { GestionProductsService } from './gestion-products.service';

describe('GestionProductsService', () => {
  let service: GestionProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
