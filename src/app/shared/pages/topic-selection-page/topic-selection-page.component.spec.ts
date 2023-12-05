import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicSelectionPageComponent } from './topic-selection-page.component';

describe('TopicSelectionPageComponent', () => {
  let component: TopicSelectionPageComponent;
  let fixture: ComponentFixture<TopicSelectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicSelectionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopicSelectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
