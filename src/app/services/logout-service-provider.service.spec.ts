import { TestBed } from '@angular/core/testing';

import { LogoutServiceProviderService } from './logout-service-provider.service';

describe('LogoutServiceProviderService', () => {
  let service: LogoutServiceProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogoutServiceProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
