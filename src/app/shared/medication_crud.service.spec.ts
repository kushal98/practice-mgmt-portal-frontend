import { TestBed } from '@angular/core/testing';

import { MedicationCrudServiceRuby } from './medication_crud.service';


describe('MedicationCrudServiceRuby', () => {
  let service: MedicationCrudServiceRuby;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicationCrudServiceRuby);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
