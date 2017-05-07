import { TestBed, inject } from '@angular/core/testing';

import { SenderService } from './sender.service';

describe('SenderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SenderService]
    });
  });

  it('should ...', inject([SenderService], (service: SenderService) => {
    expect(service).toBeTruthy();
  }));
});
