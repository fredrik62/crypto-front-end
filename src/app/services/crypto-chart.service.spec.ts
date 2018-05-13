import { TestBed, inject } from '@angular/core/testing';

import { CryptoChartService } from './crypto-chart.service';

describe('CryptoChartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CryptoChartService]
    });
  });

  it('should be created', inject([CryptoChartService], (service: CryptoChartService) => {
    expect(service).toBeTruthy();
  }));
});
