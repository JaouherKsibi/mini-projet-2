import { TestBed } from '@angular/core/testing';

import { LoginServiceProviderService } from './login-service-provider.service';

describe('LoginServiceProviderService', () => {
  let service: LoginServiceProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginServiceProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
