import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLabworksComponent } from './edit-labworks.component';

describe('EditLabworksComponent', () => {
  let component: EditLabworksComponent;
  let fixture: ComponentFixture<EditLabworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLabworksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLabworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
