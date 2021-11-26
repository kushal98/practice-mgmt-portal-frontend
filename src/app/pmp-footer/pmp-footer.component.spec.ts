import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmpFooterComponent } from './pmp-footer.component';

describe('PmpFooterComponent', () => {
  let component: PmpFooterComponent;
  let fixture: ComponentFixture<PmpFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmpFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PmpFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
