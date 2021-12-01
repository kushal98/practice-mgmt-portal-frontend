import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressnotesComponent } from './progressnotes.component';

describe('ProgressnotesComponent', () => {
  let component: ProgressnotesComponent;
  let fixture: ComponentFixture<ProgressnotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressnotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
