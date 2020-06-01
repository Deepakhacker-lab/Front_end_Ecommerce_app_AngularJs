import { TestBed } from '@angular/core/testing';

import { UpdatedataserviceService } from './updatedataservice.service';

describe('UpdatedataserviceService', () => {
  let service: UpdatedataserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatedataserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
