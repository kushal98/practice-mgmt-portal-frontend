import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesVoiceoverComponent } from './notes-voiceover.component';

describe('NotesVoiceoverComponent', () => {
  let component: NotesVoiceoverComponent;
  let fixture: ComponentFixture<NotesVoiceoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesVoiceoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesVoiceoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
