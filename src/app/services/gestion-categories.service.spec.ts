import { TestBed } from '@angular/core/testing';

import { GestionCategoriesService } from './gestion-categories.service';

describe('GestionCategoriesService', () => {
  let service: GestionCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
