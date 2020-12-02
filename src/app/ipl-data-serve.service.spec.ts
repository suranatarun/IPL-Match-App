import { TestBed } from '@angular/core/testing';

import { IPLDataServeService } from './ipl-data-serve.service';

describe('IPLDataServeService', () => {
  let service: IPLDataServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IPLDataServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
