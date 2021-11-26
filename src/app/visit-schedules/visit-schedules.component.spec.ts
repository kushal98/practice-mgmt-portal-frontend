import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitSchedulesComponent } from './visit-schedules.component';

describe('VisitSchedulesComponent', () => {
  let component: VisitSchedulesComponent;
  let fixture: ComponentFixture<VisitSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitSchedulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
