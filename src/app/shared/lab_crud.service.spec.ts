import { TestBed } from '@angular/core/testing';

import { LabReportCrudServiceRuby } from './lab_crud.service';

describe('LabReportCrudServiceRuby', () => {
  let service: LabReportCrudServiceRuby;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabReportCrudServiceRuby);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});