/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrudsServicesService } from './CrudsServices.service';

describe('Service: CrudsServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudsServicesService]
    });
  });

  it('should ...', inject([CrudsServicesService], (service: CrudsServicesService) => {
    expect(service).toBeTruthy();
  }));
});
