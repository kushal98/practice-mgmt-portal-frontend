import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMedicationsComponent } from './edit-medications.component';

describe('EditMedicationsComponent', () => {
  let component: EditMedicationsComponent;
  let fixture: ComponentFixture<EditMedicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMedicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMedicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
