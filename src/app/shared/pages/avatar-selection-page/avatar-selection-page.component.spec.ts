import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarSelectionPageComponent } from './avatar-selection-page.component';

describe('AvatarSelectionPageComponent', () => {
  let component: AvatarSelectionPageComponent;
  let fixture: ComponentFixture<AvatarSelectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarSelectionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvatarSelectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
