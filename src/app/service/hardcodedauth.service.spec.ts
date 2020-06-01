import { TestBed } from '@angular/core/testing';

import { HardcodedauthService } from './hardcodedauth.service';

describe('HardcodedauthService', () => {
  let service: HardcodedauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcodedauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
