import { TestBed } from '@angular/core/testing';

import { ValorationService } from './valoration.service';

describe('ValorationService', () => {
  let service: ValorationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValorationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
