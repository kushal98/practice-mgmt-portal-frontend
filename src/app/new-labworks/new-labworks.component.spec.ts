import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLabworksComponent } from './new-labworks.component';

describe('NewLabworksComponent', () => {
  let component: NewLabworksComponent;
  let fixture: ComponentFixture<NewLabworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLabworksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLabworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
