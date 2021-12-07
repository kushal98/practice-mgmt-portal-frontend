import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursesPageComponent } from './nurses-page.component';

describe('NursesPageComponent', () => {
  let component: NursesPageComponent;
  let fixture: ComponentFixture<NursesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NursesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
