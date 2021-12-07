import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFinderComponent } from './patient-finder.component';

describe('PatientFinderComponent', () => {
  let component: PatientFinderComponent;
  let fixture: ComponentFixture<PatientFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
