import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleChallengePageComponent } from './puzzle-challenge-page.component';

describe('PuzzleChallengePageComponent', () => {
  let component: PuzzleChallengePageComponent;
  let fixture: ComponentFixture<PuzzleChallengePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuzzleChallengePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PuzzleChallengePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
