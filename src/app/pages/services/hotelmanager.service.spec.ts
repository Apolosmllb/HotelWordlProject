import { TestBed } from '@angular/core/testing';

import { HotelmanagerService } from './hotelmanager.service';

describe('HotelManagerService', () => {
  let service: HotelmanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelmanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
