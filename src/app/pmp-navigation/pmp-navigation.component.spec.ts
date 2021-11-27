import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmpNavigationComponent } from './pmp-navigation.component';

describe('PmpNavigationComponent', () => {
  let component: PmpNavigationComponent;
  let fixture: ComponentFixture<PmpNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmpNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PmpNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
