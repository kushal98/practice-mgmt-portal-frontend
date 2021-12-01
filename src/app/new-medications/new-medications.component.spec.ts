import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMedicationsComponent } from './new-medications.component';

describe('NewMedicationsComponent', () => {
  let component: NewMedicationsComponent;
  let fixture: ComponentFixture<NewMedicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMedicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMedicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
