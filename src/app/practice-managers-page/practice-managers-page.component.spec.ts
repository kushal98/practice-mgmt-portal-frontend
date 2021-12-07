import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeManagersPageComponent } from './practice-managers-page.component';

describe('PracticeManagersPageComponent', () => {
  let component: PracticeManagersPageComponent;
  let fixture: ComponentFixture<PracticeManagersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeManagersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeManagersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
