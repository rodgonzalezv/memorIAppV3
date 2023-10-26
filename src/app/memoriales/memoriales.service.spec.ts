import { TestBed } from '@angular/core/testing';

import { MemorialesService } from './memoriales.service';

describe('MemorialesService', () => {
  let service: MemorialesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemorialesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
