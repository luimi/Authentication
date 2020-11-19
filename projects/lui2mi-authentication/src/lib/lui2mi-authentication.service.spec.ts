import { TestBed } from '@angular/core/testing';

import { Lui2miAuthenticationService } from './lui2mi-authentication.service';

describe('Lui2miAuthenticationService', () => {
  let service: Lui2miAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lui2miAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
