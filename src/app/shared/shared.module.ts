import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StartPageComponent } from './pages/start-page/start-page.component';
import { AvatarSelectionPageComponent } from './pages/avatar-selection-page/avatar-selection-page.component';
import { TopicSelectionPageComponent } from './pages/topic-selection-page/topic-selection-page.component';
import { LearningAboutPageComponent } from './pages/learning-about-page/learning-about-page.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { PuzzleChallengePageComponent } from './pages/puzzle-challenge-page/puzzle-challenge-page.component';
import { TitleComponent } from './components/title/title.component';



@NgModule({
  declarations: [
    StartPageComponent, 
    AvatarSelectionPageComponent,
    TopicSelectionPageComponent,
    LearningAboutPageComponent,
    PuzzleChallengePageComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    YouTubePlayerModule
  ],
  exports: [
    StartPageComponent,
    AvatarSelectionPageComponent,
    TopicSelectionPageComponent,
    LearningAboutPageComponent,
    PuzzleChallengePageComponent
  ]
})
export class SharedModule { }
