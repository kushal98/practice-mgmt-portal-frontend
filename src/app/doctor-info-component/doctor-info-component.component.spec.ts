import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorInfoComponentComponent } from './doctor-info-component.component';

describe('DoctorInfoComponentComponent', () => {
  let component: DoctorInfoComponentComponent;
  let fixture: ComponentFixture<DoctorInfoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorInfoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
