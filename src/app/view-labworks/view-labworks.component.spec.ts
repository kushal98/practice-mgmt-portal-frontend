import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLabworksComponent } from './view-labworks.component';

describe('ViewLabworksComponent', () => {
  let component: ViewLabworksComponent;
  let fixture: ComponentFixture<ViewLabworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLabworksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLabworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
