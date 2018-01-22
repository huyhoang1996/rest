import { TestBed, inject } from '@angular/core/testing';

import { HelioService } from './helio.service';

describe('HelioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HelioService]
    });
  });

  it('should be created', inject([HelioService], (service: HelioService) => {
    expect(service).toBeTruthy();
  }));
});
