import { TestBed } from '@angular/core/testing';

import { ShipTimeService } from './ship-time.service';

describe('ShipTimeService', () => {
  let service: ShipTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
