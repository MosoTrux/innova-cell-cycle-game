import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningAboutPageComponent } from './learning-about-page.component';

describe('LearningAboutPageComponent', () => {
  let component: LearningAboutPageComponent;
  let fixture: ComponentFixture<LearningAboutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningAboutPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearningAboutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
