import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesFreeTextComponent } from './notes-free-text.component';

describe('NotesFreeTextComponent', () => {
  let component: NotesFreeTextComponent;
  let fixture: ComponentFixture<NotesFreeTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesFreeTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesFreeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
