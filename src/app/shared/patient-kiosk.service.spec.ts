import { TestBed } from '@angular/core/testing';

import { PatientKioskService } from './patient-kiosk.service';

describe('PatientKioskService', () => {
  let service: PatientKioskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientKioskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
