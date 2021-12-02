import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesPointClickComponent } from './notes-point-click.component';

describe('NotesPointClickComponent', () => {
  let component: NotesPointClickComponent;
  let fixture: ComponentFixture<NotesPointClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesPointClickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesPointClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
