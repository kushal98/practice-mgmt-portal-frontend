import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorFinderComponent } from './doctor-finder.component';

describe('DoctorFinderComponent', () => {
  let component: DoctorFinderComponent;
  let fixture: ComponentFixture<DoctorFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
