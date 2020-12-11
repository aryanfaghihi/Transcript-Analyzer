import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscriptsContainerComponent } from './transcripts-container.component';

describe('TranscriptsContainerComponent', () => {
  let component: TranscriptsContainerComponent;
  let fixture: ComponentFixture<TranscriptsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranscriptsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscriptsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
