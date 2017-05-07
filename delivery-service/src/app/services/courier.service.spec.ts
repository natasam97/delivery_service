import { TestBed, inject } from '@angular/core/testing';

import { CourierService } from './courier.service';

describe('CourierService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourierService]
    });
  });

  it('should ...', inject([CourierService], (service: CourierService) => {
    expect(service).toBeTruthy();
  }));
});
